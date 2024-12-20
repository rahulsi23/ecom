import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
});

// Fetch a single product by ID
export const fetchProductById = createAsyncThunk("products/fetchProductById", async (id, { rejectWithValue }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
  if (!response.ok) {
    return rejectWithValue("Failed to fetch product");
  }
  return response.json();
});

// Add a new product
export const addProduct = createAsyncThunk("products/addProduct", async (formData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add product");
      } else {
        throw new Error("Unexpected response from the server");
      }
    }

    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Update an existing product
export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, updatedProduct }, { rejectWithValue }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });

  if (!response.ok) {
    return rejectWithValue("Failed to update product");
  }

  return response.json();
});

// Delete a product
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id, { rejectWithValue }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return rejectWithValue("Failed to delete product");
  }

  return id; // Return the ID of the deleted product
});

// Product slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [], // All products
    selectedProduct: null, // Single product for fetching by ID
    status: null, // Status of the latest operation
    message: "", // Message related to the latest operation
  },
  reducers: {},
 // Extra reducers in productSlice
extraReducers: (builder) => {
  builder
    // Fetch all products
    .addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
      state.message = "Fetching products...";
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
      state.message = "Products fetched successfully!";
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.payload || "Failed to fetch products.";
    })
    // Fetch single product
    .addCase(fetchProductById.pending, (state) => {
      state.status = "loading";
      state.message = "Fetching product...";
    })
    .addCase(fetchProductById.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
      state.status = "succeeded";
      state.message = "Product fetched successfully!";
    })
    .addCase(fetchProductById.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.payload || "Failed to fetch product.";
    })
    // Add product
    .addCase(addProduct.pending, (state) => {
      state.status = "loading";
      state.message = "Adding product...";
    })
    .addCase(addProduct.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.status = "succeeded";
      state.message = "Product added successfully!";
    })
    .addCase(addProduct.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.payload || "Failed to add product.";
    })
    // Update product
    .addCase(updateProduct.pending, (state) => {
      state.status = "loading";
      state.message = "Updating product...";
    })
    .addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.items.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      state.status = "succeeded";
      state.message = "Product updated successfully!";
    })
    .addCase(updateProduct.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.payload || "Failed to update product.";
    })
    // Delete product
    .addCase(deleteProduct.pending, (state) => {
      state.status = "loading";
      state.message = "Deleting product...";
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.items = state.items.filter((product) => product.id !== action.payload);
      state.status = "succeeded";
      state.message = "Product deleted successfully!";
    })
    .addCase(deleteProduct.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.payload || "Failed to delete product.";
    });
}

});

export default productSlice.reducer;
