import type { Children } from "@/lib/types/types";
import { useAuth } from "@/providers/AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }: Children) => {
  const { user } = useAuth();

  if (!user) {
    toast.error("Unauthorized Access");
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
