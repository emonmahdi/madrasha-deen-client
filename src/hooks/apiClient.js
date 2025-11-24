import axios from "axios";
import auth from "../firebase/firebase.config";

export const apiClient = axios.create({
  baseURL: `http://localhost:5000`,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(async (config) => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    const token = await currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});