import cartModel from "../models/cartModel.js";


export const getUserCart = async (req, res) => {
    try {
        const { userId } = req.user

        const cart = await cartModel.findOne({ userId })
            .populate("items.productId");

        if (!cart) {
            return res.status(200).json({
                success: true,
                cart: {
                    userId,
                    items: [],
                },
            });
        }

        res.status(200).json({
            success: true,
            cart,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch cart",
            error: error.message,
        });
    }
};

export const createCart = async (req, res) => {
    try {
        const { userId } = req.user
        const { productId, quantity } = req.body;

        if (!productId || !quantity) {
            return res.status(400).json({
                message: "productId and quantity are required",
            });
        }

        if (quantity < 1) {
            return res.status(400).json({
                message: "Quantity must be at least 1",
            });
        }

        let cart = await cartModel.findOne({ userId });

        if (!cart) {
            cart = new cartModel({
                userId,
                items: [{ productId, quantity }],
            });

            await cart.save();

            return res.status(201).json({
                message: "Cart created and product added",
                cart,
            });
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        }
        else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();

        return res.status(200).json({
            message: "Product added to cart",
            cart,
        });
    } catch (error) {
        console.error("Add to cart error:", error);
        res.status(500).json({
            message: "Server error",
        });
    }
}

export const removeItemFromCart = async (req, res) => {
    try {
        const { userId } = req.user;
        const { productId } = req.params;

        const cart = await cartModel.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (itemIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "Product not found in cart",
            });
        }

        cart.items.splice(itemIndex, 1);

        await cart.save();

        res.status(200).json({
            success: true,
            message: "Product removed from cart",
            cart,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

export const updateCart = async (req, res) => {
    try {
        const { userId } = req.user;
        const { productId, quantity } = req.body;

        if (!productId || quantity === undefined) {
            return res.status(400).json({ message: "productId and quantity required" });
        }

        if (quantity < 0) {
            return res.status(400).json({ message: "quantity cannot be negative" });
        }

        let cart = await cartModel.findOne({ userId });

        if (!cart) {
            cart = await cartModel.create({
                userId,
                items: quantity > 0 ? [{ productId, quantity }] : []
            });
            return res.status(201).json(cart);
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.productId.equals(productId)
        );

        if (itemIndex > -1) {
            if (quantity === 0) {
                cart.items.splice(itemIndex, 1);
            } else {
                cart.items[itemIndex].quantity = quantity;
            }
        } else {
            if (quantity > 0) {
                cart.items.push({ productId, quantity });
            }
        }

        await cart.save();
        res.status(200).json(cart);

    } catch (error) {
        console.error("updateCart error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
