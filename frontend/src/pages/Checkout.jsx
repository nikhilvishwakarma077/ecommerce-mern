// src/pages/Checkout.jsx
import { placeOrderAPI } from "../api/order.api";
import { useCart } from "../context/CartContext";
import OrderSummary from "../components/order/OrderSummary";

const Checkout = () => {
  const { cart, setCart } = useCart();

  const handlePlaceOrder = async () => {
    try {
      const { data } = await placeOrderAPI();
      console.log(data);
      
      setCart({ items: [] }); // cart clear
      alert("Order placed successfully");
    } catch (err) {
      alert("Order failed");
    }
  };

  if (!cart || cart.items.length === 0) {
    return <p className="text-center mt-10">Cart is empty</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <OrderSummary items={cart.items} />

      <button
        onClick={handlePlaceOrder}
        className="mt-6 w-full bg-black text-white py-3 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
