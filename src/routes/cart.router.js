import express from "express";
import {
  index,
  addCart,
  getCartByUserId,
  updateItems,
} from "../controllers/CartController.js";
var router = express.Router();

// Lấy danh sách giỏ hàng
router.get("/", index);
router.get("/user/:id", getCartByUserId);
router.post("/", addCart);
router.put("/:id", updateItems);

export default router;
