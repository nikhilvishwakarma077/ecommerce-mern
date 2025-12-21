import express from "express"
import { getAllOrders, getMyOrders, placeOrder, updateOrderStatus } from "../controllers/orderController.js"
import { auth } from "../middleware/authMiddleware.js"
import { isAdmin } from "../middleware/roleMiddleware.js"

const orderRouter = express.Router()

orderRouter.post("/", auth, placeOrder)
orderRouter.get("/my", auth, getMyOrders)
orderRouter.get("/allorders", auth, isAdmin, getAllOrders)
orderRouter.put("/:orderId/status", auth, isAdmin, updateOrderStatus)

export default orderRouter;