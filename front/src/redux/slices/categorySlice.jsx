import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API calls
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
 
  return response.json();
});

export const addCategory = createAsyncThunk('categories/addCategory', async (newCategory) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCategory),
  });
  if (!response.ok) {
    throw new Error('Failed to add category');
  }
  return response.json();
});


export const updateCategory = createAsyncThunk('categories/updateCategory', async ({ id, updatedCategory }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedCategory),
  });
  return response.json();
});

// New delete category action
export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id) => {
  await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    status: null,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch categories
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })

      // Add category
      .addCase(addCategory.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.message = 'Category added successfully!';
      })

      // Update category
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.items.findIndex((category) => category.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
          state.message = 'Category updated successfully!';
        }
      })

      // Delete category
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.items = state.items.filter((category) => category.id !== action.payload);
        state.message = 'Category deleted successfully!';
      })

      // Handle pending state
      .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
        state.status = 'loading';
      })

      // Handle rejected state (for errors)
      .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
        state.status = 'failed';
        state.message = action.error.message;
      });
  },
});

export default categorySlice.reducer;
