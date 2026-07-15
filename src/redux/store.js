import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import categoriesReducer from "./slices/categorySlice"
import menuReducer from "./slices/menuSlice";
import restaurantReducer from "./slices/restaurantSlice";
import dealReducer from "./slices/dealSlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
      menu: menuReducer,
       restaurants: restaurantReducer,
       deal: dealReducer,
       cart: cartReducer,
  },
});