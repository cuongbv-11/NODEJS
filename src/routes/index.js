import express from "express";
import routerProduct from "./product.js";
import routerAuth from "./auth.js";
import routerCart from "./cart.router.js";
import routercommom from "./commom.router.js";
const router = express.Router();

router.use("/product", routerProduct);
router.use("/auth", routerAuth);
router.use("/cart", routerCart);
router.use("/commom", routercommom);

export default router;
