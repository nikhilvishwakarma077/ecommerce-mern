import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";


const testRouter = express.Router();

testRouter.get(
  "/admin-test",
  auth,
  isAdmin,
  (req, res) => {
    res.json({
      message: "Admin access granted",
      user: req.user,
    });
  }
);

export default testRouter;
