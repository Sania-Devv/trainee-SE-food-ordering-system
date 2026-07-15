import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import { ENDPOINTS } from "../../api/endpoints";


const extractErrorMessage = (payload) => {
  if (!payload) return "Something went wrong";
  const rawError = payload.error || payload;

  if (typeof rawError !== "string") return "Something went wrong";


  const match = rawError.match(/string=['"]([^'"]+)['"]/);
  if (match) return match[1];

  return rawError;
};

// ================= Register =================
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = awaitfetch(`${BASE_URL}${ENDPOINTS.REGISTER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Network error, please try again" });
    }
  },
);

// ================= Login =================
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.LOGIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Network error, please try again" });
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
  successMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.successMessage = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.loading = false;
      state.error = null;
      state.success = false;
      state.successMessage = null;
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
        state.successMessage = action.payload.message;
        state.user = action.payload.data;
        state.token = action.payload.token.access;
        state.isAuthenticated = true;
        state.isAdmin = action.payload.data.is_admin;

        localStorage.setItem("token", action.payload.token.access);
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = extractErrorMessage(action.payload);
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
        state.successMessage = action.payload.message;
        state.user = action.payload.data;
        state.token = action.payload.token.access;
        state.isAuthenticated = true;
        state.isAdmin = action.payload.data.is_admin;

        localStorage.setItem("token", action.payload.token.access);
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = extractErrorMessage(action.payload);
      });
  },
});

export const { clearAuthState, logout } = authSlice.actions;
export default authSlice.reducer;