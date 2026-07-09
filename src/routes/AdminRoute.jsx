import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useToast } from "../context/ToastContext";
import { useEffect, useRef } from "react";

const AdminRoute = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const { showToast } = useToast();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!hasShownToast.current) {
      if (!isAuthenticated) {
        showToast("Please login to continue", "error");
        hasShownToast.current = true;
      } else if (!isAdmin) {
        showToast("Access denied. Admins only.", "error");
        hasShownToast.current = true;
      }
    }
  }, [isAuthenticated, isAdmin, showToast]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;