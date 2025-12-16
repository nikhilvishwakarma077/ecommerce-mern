import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const registerUser = async (req, res) => {

    try {
        const { name, email, password, role } = req.body

        const userExists = await userModel.findOne({ email })
        if (userExists) return res.json({ success: false, message: "User Already exists" })

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({ name, email, password: hashedPassword, role })
        console.log(newUser);
        await newUser.save()

        res.status(201).json({ success: true, message: "User Registered successfully", data: newUser })
    } catch (error) {
        console.log(error.message);

    }

}
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ success: false, message: "Invalid Credentials" })

        const accessToken = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        res.json({
            success: true,
            message: "Login successful",
            token: accessToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.log(error.message);
    }
}