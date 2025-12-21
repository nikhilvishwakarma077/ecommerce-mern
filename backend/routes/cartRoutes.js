import express from "express"
import { createCart, removeItemFromCart, getUserCart, updateCart } from "../controllers/cartController.js"
import { auth } from "../middleware/authMiddleware.js"


const cartRouter = express.Router()


cartRouter.get("/", auth, getUserCart)
cartRouter.post("/createcart", auth, createCart)
cartRouter.delete("/remove/:productId", auth, removeItemFromCart)
cartRouter.put("/update", auth, updateCart)

export default cartRouter