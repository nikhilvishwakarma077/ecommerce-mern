// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import {
  getCartAPI,
  addToCartAPI,
  updateCartAPI,
  removeFromCartAPI,
} from "../api/cart.api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {



  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    setLoading(true);
    const { data } = await getCartAPI();
    setCart(data.cart);
    setLoading(false);
  };

  const addToCart = async (productId, quantity = 1) => {
    const { data } = await addToCartAPI(productId, quantity);
    setCart(data.cart);
  };

  const updateCart = async (productId, quantity) => {
    const { data } = await updateCartAPI(productId, quantity);
    setCart(data);
  };

  const removeItem = async (productId) => {
    const { data } = await removeFromCartAPI(productId);
    setCart(data.cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        fetchCart,
        addToCart,
        updateCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
