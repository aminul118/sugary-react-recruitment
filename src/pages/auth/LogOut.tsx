import { useEffect } from "react";
import { useAuth } from "@/providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LogOut = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    toast.success("You have successfully logged out!");
    navigate("/");
  }, [logout, navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default LogOut;
