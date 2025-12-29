// src/api/order.api.js
import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/order",
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const placeOrderAPI = () => API.post("/");

export const getMyOrdersAPI = () => API.get("/my");
