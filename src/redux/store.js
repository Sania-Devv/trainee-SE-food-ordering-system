import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import categoriesReducer from "./slices/categorySlice"
import menuReducer from "./slices/menuSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
      menu: menuReducer,
  },
});