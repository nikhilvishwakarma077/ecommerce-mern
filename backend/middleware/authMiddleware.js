import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.json({ message: "Not authorized, token missing" });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded // { userId, role }
        next()

    } catch (error) {
        return res.json({ message: "Invalid or expired token" });
    }
}