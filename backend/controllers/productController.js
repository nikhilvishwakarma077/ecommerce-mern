import mongoose from "mongoose";
import productModel from "../models/productModel.js";


export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find().select("name price image stock");

        return res.status(200).json({
            success: true,
            message: products.length
                ? "Products fetched successfully"
                : "No products found",
            data: products,
        });

    } catch (error) {
        console.error("getAllProducts error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch products",
        });

    }
}
export const getProductById = async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid product ID",
        });
    }

    const product = await productModel
        .findById(id)
        .select("name price image category stock description")
        .lean();

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }

    res.status(200).json({
        success: true,
        data: product,
    });
};
export const addProduct = async (req, res) => {
    try {

        const {
            name,
            description,
            price,
            category,
            stock,
        } = req.body;

        const image = req.file.path

        if (!image) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        if (
            !name ||
            !description ||
            price === undefined ||
            !category ||
            stock === undefined
        ) {
            return res.json({
                success: false,
                message: "All required fields must be provided",
            });
        }

        if (price < 0) {
            return res.status(400).json({
                success: false,
                message: "Price cannot be negative",
            });
        }

        if (stock < 0) {
            return res.status(400).json({
                success: false,
                message: "Stock cannot be negative",
            });
        }

        const productData = {
            name: name.trim(),
            description,
            price,
            image,
            category,
            stock,
        };

        const product = new productModel(productData)

        await product.save()
        return res.status(201).json({
            success: true,
            message: "Product Added successfully",
            product,
        });



    } catch (error) {
        console.log({ message: "Error while addProduct" });
    }
}
export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid product ID",
        });
    }

    const deletedProduct = await productModel.findByIdAndDelete(id).lean();

    if (!deletedProduct) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }

    res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        deletedProduct,
    });
};
export const updateProductById = async (req, res) => {
    try {
        res.json("Product updated by ID")
    } catch (error) {
        console.log({ message: "Error while updateProductById" });
    }
}

