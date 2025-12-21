import cartModel from "../models/cartModel.js";
import orderModel from "../models/orderModel.js";

export const placeOrder = async (req, res) => {
    try {
        const { userId } = req.user;

        const cart = await cartModel.findOne({ userId }).populate("items.productId");

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const orderItems = cart.items.map((item) => ({
            productId: item.productId._id,
            quantity: item.quantity,
            priceAtPurchase: item.productId.price,
        }));

        const totalAmount = orderItems.reduce(
            (sum, item) => sum + item.quantity * item.priceAtPurchase,
            0
        );

        const order = await orderModel.create({
            userId,
            items: orderItems,
            totalAmount,
            status: "PENDING",
        });

        cart.items = [];
        await cart.save();

        res.status(201).json({
            message: "Order placed successfully",
            order,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: "Order creation failed", error: error });
    }
};
export const getMyOrders = async (req, res) => {
    try {
        const { userId } = req.user;

        const orders = await orderModel.find({ userId })
            .populate("items.productId", "name image price")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: orders.length,
            orders,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
};
export const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find()
            .populate("userId", "name email")
            .populate("items.productId", "name price")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: orders.length,
            orders,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
};
export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const allowedStatuses = ["PENDING", "PAID", "SHIPPED"];
        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Invalid order status",
            });
        }

        const order = await orderModel.findById(orderId);

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }

        order.status = status;

        await order.save();

        res.status(200).json({
            message: "Order status updated successfully",
            order,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update order status",
            error: error.message,
        });
    }
};