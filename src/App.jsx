import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/customer/Home";
import MenuItemDetail from "./pages/customer/MenuItemDetail";
import Offers from "./pages/customer/Offers";
import RestaurantDetail from "./pages/customer/RestaurantDetail";
import OrderTracking from "./pages/customer/OrderTracking";
import Login from "./pages/customer/Login";
import Signup from "./pages/customer/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthLayout from "./components/common/AuthLayout"
function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuItemDetail />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/restaurants" element={<RestaurantDetail />} />

        <Route
          path="/track-order"
          element={
            <ProtectedRoute>
              <OrderTracking />
            </ProtectedRoute>
          }
        />

      
      </Route>
        <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;