import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { subtotal, itemCount } = useCart();

  return (
    <div className="border rounded-lg p-4 h-fit">
      <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>

      <div className="flex justify-between mb-4">
        <span>Subtotal</span>
        <span className="font-semibold">₹{subtotal}</span>
      </div>

      <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
