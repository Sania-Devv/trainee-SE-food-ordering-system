import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import { ENDPOINTS } from "../../api/endpoints";

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
  `${BASE_URL}${ENDPOINTS.GET_CATEGORIES}`, {
        method: "GET",
      });
      const data = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Network error,plz try again" });
    }
  },
);
const initialState = {
  categories: [], // plural
  loading: false, 
  error: null,
};
const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategory.pending, (state)=>{
         state.loading =true;
         state.error =null;
        })
        .addCase(fetchCategory.fulfilled, (state,action)=>{
            state.loading = false ;
            state.categories =action.payload.data;
        })
       .addCase(fetchCategory.rejected ,(state,action)=>{
         state.loading =false;
         state.error =action.payload?.error || "Something went wrong";
       });
    },

});
export default categoriesSlice.reducer;