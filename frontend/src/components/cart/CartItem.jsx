import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateCart, removeItem, fetchCart } = useCart();


  const onIncreaseQuantity = (pId, quantity) => {
    updateCart(pId, quantity)
    fetchCart()
  }
  const onDecreaseQuantity = (pId, quantity) => {
    updateCart(pId, quantity)
    fetchCart()
  }


  const onRemoveCartItem = (pId) => {
    removeItem(pId)
    fetchCart()
  }


  return (
    <div className="flex items-center justify-between  bg-gray-900 text-white p-4 rounded-lg shadow-md">

      {/* Product Info */}
      <div className="flex gap-3 items-center">
        <img src={item.productId.image} className="w-15 border bg-white rounded" alt="" />
        <h4 className="text-lg font-semibold">
          {item.productId.name}
        </h4>
        {/* <p className="text-sm text-gray-400">
          ₹{item.productId.price} × {item.quantity}
        </p> */}
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() =>
            onDecreaseQuantity(item.productId._id, item.quantity - 1)
          }
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-lg"
        >
          −
        </button>

        <span className="text-lg font-medium">
          {item.quantity}
        </span>

        <button
          onClick={() =>
            onIncreaseQuantity(item.productId._id, item.quantity + 1)
          }
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-lg"
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button 
        onClick={() => onRemoveCartItem(item.productId._id)}
        className="text-red-400 hover:text-red-500 text-sm"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
