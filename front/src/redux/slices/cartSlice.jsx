import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base URL
const BASE_URL = import.meta.env.VITE_API_URL+"/cart"; // Replace with your actual backend URL

// Async Thunks
export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId, thunkAPI) => {
  try {
    console.log(response.data); 
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data; 
    
 // Returns the cart data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
  
});

export const addToCart = createAsyncThunk("cart/addToCart", async (cartItem, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/add`, cartItem);
    return response.data; // Returns the updated cart
  } catch (error) {
    console.log(error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }


});

export const updateCartItem = createAsyncThunk("cart/updateCartItem", async (cartItem, thunkAPI) => {
  try {
    const response = await axios.put(`${BASE_URL}/update`, cartItem);
    return response.data; // Returns the updated cart
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const removeFromCart = createAsyncThunk("cart/removeFromCart", async (cartItem, thunkAPI) => {
  try {
    const response = await axios.delete(`${BASE_URL}/remove`, { data: cartItem });
    return response.data; // Returns the updated cart
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Initial State
const initialState = {
  items: [], // Array of cart items
  totalPrice: 0, // Total price of items in the cart
  status: "idle", // Status of async actions
  error: null, // Error messages
};

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Update Cart Item
      .addCase(updateCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Remove from Cart
      .addCase(removeFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
