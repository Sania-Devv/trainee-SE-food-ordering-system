export const ENDPOINTS = {
  // Auth
  LOGIN: "/user/login/",
  REGISTER: "/user/register/",

  // Categories
  GET_CATEGORIES: "/restaurants/all-category",

  // Menu
  GET_ALL_MENU: "/restaurants/all-menu-items",
  GET_MENU_BY_ID: "/restaurants/menuitem/",

  // Restaurants
  GET_ALL_RESTAURANTS: "/restaurants/all-restaurant",
 

  // Deals
GET_ALL_DEALS: "/restaurants/all-deal/",
GET_DEAL_BY_ID: "/restaurants/deal/",

  // Cart
   GET_CART: "/order/cart/",
  ADD_TO_CART: "/order/cart/add/",
  UPDATE_CART_ITEM: "/order/cart/update-item/",
  DELETE_CART_ITEM: "/order/cart/delete-item/"
};