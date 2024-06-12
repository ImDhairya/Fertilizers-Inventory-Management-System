import express from "express";
const router = express.Router();

import {addProduct} from "../controllers/productController.js";

router.route("/addProduct").post(addProduct);

export default router;
