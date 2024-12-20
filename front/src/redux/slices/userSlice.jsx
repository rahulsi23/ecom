import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (formData, { rejectWithValue }) => {
    try {
      console.log(formData);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/signup`, formData);
       
      return response.data;
    } catch (error) {
      // Handle validation errors
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Something went wrong");
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        userData
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Login failed");
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (_, { rejectWithValue }) => {
    try {
   
      const token = localStorage.getItem("token");
      // console.log("token", token);

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
        
      });
   
      
      return response.data.user; // Assuming the API returns { user: {...} }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch user profile");
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Update user profile
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
  
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
