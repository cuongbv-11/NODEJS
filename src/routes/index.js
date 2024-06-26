import express from "express";
import routerProduct from "./products.js";
import routerAuth from "./auth.js";
import routerCart from "./cart.router.js";
import routercommom from "./commom.router.js";
import routerCategories from "./categories.js";
import routerBookss from "./bookss.js";
const router = express.Router();

router.use("/product", routerProduct);
router.use("/auth", routerAuth);
router.use("/cart", routerCart);
router.use("/commom", routercommom);
router.use("/categories", routerCategories);
router.use("/bookss", routerBookss);

export default router;
