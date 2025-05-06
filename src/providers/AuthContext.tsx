/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useContext, useEffect } from "react";
import axios from "../hooks/axiosInstance";
import type { Children } from "../lib/types/types";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true); 

  const login = async (username: string, password: string) => {
    const res = await axios.post("/AdminAccount/Login", {
      UserName: username,
      Password: password,
    });

    localStorage.setItem("accessToken", res.data.Token);
    localStorage.setItem("refreshToken", res.data.RefreshToken);
    setUser(res.data.User);
    setLoading(false); 
  };

  const refreshAccessToken = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      setLoading(false); 
      return;
    }

    try {
      const res = await axios.post("/Account/RefreshToken", {
        AccessToken: accessToken,
        RefreshToken: refreshToken,
      });

      localStorage.setItem("accessToken", res.data.Token);
      localStorage.setItem("refreshToken", res.data.RefreshToken);
      setUser(res.data.User);
    } catch (err) {
      console.error("Refresh token failed", err);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  useEffect(() => {
    refreshAccessToken(); 
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
