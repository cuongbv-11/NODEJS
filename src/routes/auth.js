import express from "express";
import { signUp, signIn, getUserById } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/user/:id", getUserById);

export default router;
