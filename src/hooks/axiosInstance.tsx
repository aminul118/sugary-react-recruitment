import axios from "axios";
import { toast } from "sonner";

const baseURL = import.meta.env.VITE_BASE_URL as string;

const axiosInstance = axios.create({ baseURL });

// Request interceptor: attach token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: refresh access token on 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          toast.error("Session expired. Please log in again.");
          window.location.href = "/";
          return Promise.reject(error);
        }

        const accessToken = localStorage.getItem("accessToken");

        const res = await axios.post(`${baseURL}/Account/RefreshToken`, {
          AccessToken: accessToken,
          RefreshToken: refreshToken,
        });

        // Store new tokens
        localStorage.setItem("accessToken", res.data.Token);
        localStorage.setItem("refreshToken", res.data.RefreshToken);

        // Retry the original request with new access token
        originalRequest.headers["Authorization"] = `Bearer ${res.data.Token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        toast.error("Session expired. Please log in again.");
        localStorage.clear();
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
