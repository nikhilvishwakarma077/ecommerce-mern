// src/api/cart.api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/cart",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const getCartAPI = () => API.get("/");

export const addToCartAPI = (productId, quantity) =>
  API.post("/createcart", { productId, quantity });

export const updateCartAPI = (productId, quantity) =>
  API.put("/update", { productId, quantity });

export const removeFromCartAPI = (productId) =>
  API.delete(`/remove/${productId}`);
