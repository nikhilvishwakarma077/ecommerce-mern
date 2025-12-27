import CartItem from "./CartItem";

const CartList = ({ items }) => {
  return items.map((item) => (
    <CartItem key={item.productId._id} item={item} />
  ));
};

export default CartList;
