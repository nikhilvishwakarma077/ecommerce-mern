const statusColor = {
    PENDING: "bg-yellow-100 text-yellow-700",
    PAID: "bg-blue-100 text-blue-700",
    SHIPPED: "bg-green-100 text-green-700",
};

const OrderStatus = ({ status }) => {
    return (
        <span
            className={`px-3 py-1 rounded text-sm ${statusColor[status]}`}
        >
            {status}
        </span>
    );
};

export default OrderStatus;
