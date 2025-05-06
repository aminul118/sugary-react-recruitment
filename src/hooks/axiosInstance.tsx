import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_URL as string;

const baseURL = `${apiBaseUrl}`;

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
