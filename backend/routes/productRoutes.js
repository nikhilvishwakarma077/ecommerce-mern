import express from "express"
import { addProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controllers/productController.js"
import { isAdmin } from "../middleware/roleMiddleware.js"
import { auth } from "../middleware/authMiddleware.js"
import upload from "../config/multer.js"

const productRouter = express.Router()

productRouter.get("/products", getAllProducts)
productRouter.get("/:id", getProductById)
productRouter.post("/addproduct", upload.single("image"), auth, isAdmin, addProduct)
productRouter.delete("/delete/:id", auth, isAdmin, deleteProductById)
productRouter.put("/update/:id", auth, isAdmin, updateProductById)

export default productRouter;