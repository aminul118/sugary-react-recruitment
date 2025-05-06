import type { Children } from "@/lib/types/types";
import { useAuth } from "@/providers/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: Children) => {
  const { user } = useAuth();

  if (!user) {
    
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
