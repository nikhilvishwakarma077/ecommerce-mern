import OrderStatus from "./OrderStatus";

const OrderItem = ({ order }) => {
    return (
        <div className="border rounded p-4">
            <div className="flex justify-between mb-3">
                <p className="font-semibold">
                    Order #{order._id.slice(-6)}
                </p>
                <OrderStatus status={order.status} />
            </div>

            {order.items.map((item) => (
                <div key={item.productId._id} className="flex justify-between text-sm">
                    <span>{item.productId.name} × {item.quantity}</span>
                    <span>₹{item.priceAtPurchase * item.quantity}</span>
                </div>
            ))}

            <p className="text-right font-bold mt-3">
                Total: ₹{order.totalAmount}
            </p>
        </div>
    );
};

export default OrderItem;
