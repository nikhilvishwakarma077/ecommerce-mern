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
      <div className=" w-150 border  p-5 m-10">

        <CartList items={cart.items} />
        <CartSummary items={cart.items} />
      </div>
    </>
  );
};

export default Cart;
