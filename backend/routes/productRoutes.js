import express from "express";
const router = express.Router();

import {addProduct, getProducts} from "../controllers/productController.js";

router.route("/addProduct").post(addProduct);
router.route("/getProduct").get(getProducts);

export default router;
