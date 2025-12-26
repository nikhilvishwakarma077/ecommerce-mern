import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 border rounded-lg p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">₹{item.price}</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => decreaseQty(item._id)}
            className="px-3 py-1 border rounded"
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQty(item._id)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => removeItem(item._id)}
        className="text-red-500 text-sm"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
