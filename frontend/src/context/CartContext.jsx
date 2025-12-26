import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const dummyCartItems = [
  {
    _id: "1",
    name: "iPhone 15",
    price: 79999,
    image: "https://via.placeholder.com/80",
    quantity: 1,
  },
  {
    _id: "2",
    name: "AirPods Pro",
    price: 24999,
    image: "https://via.placeholder.com/80",
    quantity: 2,
  },
];

export const CartProvider = ({ children }) => {
    
  const [items, setItems] = useState(dummyCartItems);
  const [loading] = useState(false);

  const increaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item._id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        loading,
        increaseQty,
        decreaseQty,
        removeItem,
        subtotal,
        itemCount: items.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
