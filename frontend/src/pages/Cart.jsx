import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {  items } = useCart();

  // if (loading) {
  //   return <p className="text-center mt-10">Loading cart...</p>;
  // }

  if (items.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <CartList />
      <CartSummary />
    </div>
  );
};

export default Cart;
