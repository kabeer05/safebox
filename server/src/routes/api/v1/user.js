import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Safebox API v1 (User)",
    error: false,
  });
});

router.get("/me", (req, res) => {});

export default router;
