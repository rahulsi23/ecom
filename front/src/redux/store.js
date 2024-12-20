import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoryReducer,
    products: productReducer, 
    cart: cartReducer,// Add the new slice
  },
});
