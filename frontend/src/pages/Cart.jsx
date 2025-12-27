// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  const { cart, loading } = useCart();

  if (loading) return <p>Loading...</p>;
  if (!cart || cart.items.length === 0) return <p>Cart is empty</p>;

  return (
    <>
      <CartList items={cart.items} />
      <CartSummary items={cart.items} />
    </>
  );
};

export default Cart;
