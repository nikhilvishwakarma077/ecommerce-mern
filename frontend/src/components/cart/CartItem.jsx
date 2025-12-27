import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateCart, removeItem } = useCart();

  return (
    <div>
      <h4>{item.productId.name}</h4>
      <p>Qty: {item.quantity}</p>

      <button onClick={() =>
        updateCart(item.productId._id, item.quantity + 1)
      }>+</button>

      <button onClick={() =>
        updateCart(item.productId._id, item.quantity - 1)
      }>-</button>

      <button onClick={() =>
        removeItem(item.productId._id)
      }>Remove</button>
    </div>
  );
};

export default CartItem;
