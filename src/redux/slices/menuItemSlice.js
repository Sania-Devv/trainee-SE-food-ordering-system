import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://127.0.0.1:8000";

export const fetchMenuItems = createAsyncThunk(
  "menuItems/fetchMenuItems",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/restaurants/all-menu-items`, {
        method: "GET",
      });
      const data = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Network error, plz try again" });
    }
  },
);

const initialState = {
  menuItems: [], // plural, sab items yahan store honge
  loading: false,
  error: null,
};

const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.menuItems = action.payload.data;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || "Something went wrong";
      });
  },
});

export default menuItemsSlice.reducer;