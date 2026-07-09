import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// ================= Register =================

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/register/", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Something went wrong",
      );
    }
  },
);

// ================= Login =================

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/login/", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Something went wrong",
      );
    }
  },
);

// ================= Rehydrate from localStorage =================
const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  isAuthenticated: !!storedToken,
  isAdmin: storedUser ? JSON.parse(storedUser).is_admin : false,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // ================= Register =================
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.data;
        state.token = action.payload.token.access;
        state.isAuthenticated = true;
        state.isAdmin = action.payload.data.is_admin;

        localStorage.setItem("token", action.payload.token.access);
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || action.payload || "Registration Failed";
      })

      // ================= Login =================
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.data;
        state.token = action.payload.token.access;
        state.isAuthenticated = true;
        state.isAdmin = action.payload.data.is_admin;

        localStorage.setItem("token", action.payload.token.access);
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || action.payload || "Login Failed";
      });
  },
});

export const { clearAuthState, logout } = authSlice.actions;
export default authSlice.reducer;