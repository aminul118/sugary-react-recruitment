/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useState, useContext } from "react";
import axios from "../hooks/axiosInstance";
import type { Children } from "../lib/types/types";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useState<any>(null);

  const login = async (username: string, password: string) => {
    const res = await axios.post("/AdminAccount/Login", {
      UserName: username,
      Password: password,
    });
    localStorage.setItem("accessToken", res.data.Token);
    localStorage.setItem("refreshToken", res.data.RefreshToken);
    setUser(res.data.User);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
