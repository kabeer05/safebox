import { Router } from "express";
import bcrypt from "bcrypt";
import { v6 as uuidv6 } from "uuid";

const router = Router();

router.get("/", (req, res) => {});

router.post("/login", (req, res) => {});

router.post("/register", async (req, res) => {});

router.post("/logout", (req, res) => {});

export default router;
