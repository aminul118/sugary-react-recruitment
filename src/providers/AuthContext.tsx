/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import axios from "../hooks/axiosInstance";
import type { Children } from "../lib/types/types";
import { toast } from "sonner";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const login = async (username: string, password: string) => {
    const res = await axios.post("/AdminAccount/Login", {
      UserName: username,
      Password: password,
    });

    localStorage.setItem("accessToken", res.data.Token);
    localStorage.setItem("refreshToken", res.data.RefreshToken);
    localStorage.setItem("user", JSON.stringify(res.data.User));
    setUser(res.data.User);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  const refreshAccessToken = useCallback(async () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) return;

    try {
      const res = await axios.post("/Account/RefreshToken", {
        AccessToken: accessToken,
        RefreshToken: refreshToken,
      });

      localStorage.setItem("accessToken", res.data.Token);
      localStorage.setItem("refreshToken", res.data.RefreshToken);

      const user =
        res.data.User || JSON.parse(localStorage.getItem("user") || "null");
      setUser(user);
    } catch (err) {
      toast.error(`Refresh token failed: ${err}`);
      logout();
    }
  }, []);

  useEffect(() => {
    const runRefresh = async () => {
      await refreshAccessToken();
      setLoading(false);
    };
    runRefresh();
  }, [refreshAccessToken]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
