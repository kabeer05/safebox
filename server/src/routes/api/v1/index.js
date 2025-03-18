import { Router } from "express";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Safebox API v1",
    error: false,
  });
});

router.get("/debug-session", (req, res) => {});

export default router;
