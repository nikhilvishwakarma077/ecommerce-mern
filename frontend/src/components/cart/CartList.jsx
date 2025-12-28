import CartItem from "./CartItem";

const CartList = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item,index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CartList;
