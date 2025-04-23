import axios from "axios";
import { useAuthStore } from "./authStore";

export const internalAxios = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const externalAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

internalAxios.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token.trim();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

internalAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { refresh } = useAuthStore.getState();
      return internalAxios
        .post("auth/refresh", { refresh: refresh })
        .then((response) => {
          if (response.status === 200) {
            useAuthStore.setState({ token: response.data.access });
            localStorage.setItem("token", response.data.access);
            return internalAxios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

externalAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { refresh } = useAuthStore.getState();
      return internalAxios
        .post("auth/refresh", { refresh: refresh })
        .then((response) => {
          if (response.status === 200) {
            useAuthStore.setState({ token: response.data.access });
            localStorage.setItem("token", response.data.access);
            return externalAxios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);
