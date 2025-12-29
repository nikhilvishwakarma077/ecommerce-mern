const OrderSummary = ({ items }) => {
    const total = items.reduce(
        (sum, i) => sum + i.productId.price * i.quantity,
        0
    );

    return (
        <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {items.map((item) => (
                <div key={item.productId._id} className="flex justify-between mb-2">
                    <span>{item.productId.name} × {item.quantity}</span>
                    <span>₹{item.productId.price * item.quantity}</span>
                </div>
            ))}

            <hr className="my-3" />
            <p className="font-bold text-right">Total: ₹{total}</p>
        </div>
    );
};

export default OrderSummary;
