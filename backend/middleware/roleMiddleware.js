

export const isAdmin = (req, res, next) => {

    if (!req.user) {
        return res.json({ message: "Not authenticated" });
    }

    if (req.user.role !== "admin") {
        return res.json({ message: "Admin access only" });
    }

    next()
}