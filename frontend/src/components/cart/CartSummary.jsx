const CartSummary = ({ items }) => {
  const total = items.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  return <h3>Total: ₹{total}</h3>;
};

export default CartSummary;
