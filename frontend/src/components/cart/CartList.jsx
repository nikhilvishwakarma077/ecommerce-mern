import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartList = () => {
  const { items } = useCart();

  return (
    <div className="md:col-span-2 space-y-4">
      {items.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
