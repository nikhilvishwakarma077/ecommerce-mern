// src/pages/Orders.jsx
import { useEffect, useState } from "react";
import { getMyOrdersAPI } from "../api/order.api";
import OrderItem from "../components/order/OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await getMyOrdersAPI();
      setOrders(data.orders);
    };
    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return <p className="text-center mt-10">No orders yet</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {orders.map((order) => (
        <OrderItem key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
