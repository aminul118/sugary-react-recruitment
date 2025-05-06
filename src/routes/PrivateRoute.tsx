import GlobalLoading from "@/components/loading/GlobalLoading";
import type { Children } from "@/lib/types/types";
import { useAuth } from "@/providers/AuthContext";

import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const PrivateRoute = ({ children }: Children) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <GlobalLoading />;
  }

  if (!user) {
    toast.error("Unauthorized Access");
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
