import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://127.0.0.1:8000";

export const fetchDealById = createAsyncThunk(
  "deal/fetchDealById",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/restaurants/deal/${id}/`
      );

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "Network Error",
      });
    }
  }
);

const dealSlice = createSlice({
  name: "deal",

  initialState: {
    deal: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchDealById.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDealById.fulfilled, (state, action) => {
        state.loading = false;
        state.deal = action.payload.data;
      })

      .addCase(fetchDealById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error;
      });
  },
});

export default dealSlice.reducer;