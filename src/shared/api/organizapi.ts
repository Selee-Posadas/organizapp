import axios from "axios";

export const organizApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

organizApi.interceptors.request.use(
  async (config) => {
    const token = "Mi token de autenticación";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

organizApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;

    if (response) {
      if (response.status === 401) {
        console.log("Token not found. Redirecting to login...");
      }

      if (response.status === 400) {
        const message = response.data.message || "Invalid data";
        console.error("Validation error:", message);
      }
    } else {
      console.error("Network error: Could not connect to the server");
    }

    return Promise.reject(error);
  },
);
