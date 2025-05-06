import { useAuth } from "@/providers/AuthContext";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    toast.error("Unauthorized Access");
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
