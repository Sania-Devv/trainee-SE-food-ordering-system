import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useToast } from "../context/ToastContext";
import { useEffect, useRef } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !hasShownToast.current) {
      showToast("Please login to continue", "error");
      hasShownToast.current = true;
    }
  }, [isAuthenticated, showToast]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;

};

export default ProtectedRoute;