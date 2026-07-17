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
  DELETE_CART_ITEM: "/order/cart/delete-item/",

  //order
  
  GET_ALL_ORDERS: "/order/admin/orders",
  UPDATE_ORDER_STATUS: "/order/admin/orders/",
  //analytics
  
ADMIN_OVERVIEW:"/order/admin/analytics/overview/",
 ADMIN_REVENUE_OVER_TIME:
    "/order/admin/analytics/revenue-over-time/",

  ADMIN_ORDERS_BY_STATUS:
    "/order/admin/analytics/orders-by-status/",

  ADMIN_POPULAR_ITEMS:
    "/order/admin/analytics/popular-items/",

  ADMIN_POPULAR_DEALS:
    "/order/admin/analytics/popular-deals/",

  ADMIN_REVENUE_BY_RESTAURANT:
    "/order/admin/analytics/revenue-by-restaurant/",
};