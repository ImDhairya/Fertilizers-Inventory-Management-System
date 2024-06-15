import express from "express";
const router = express.Router();

import {
  addProduct,
  deleteProduct,
  getProducts,
} from "../controllers/productController.js";

router.route("/addProduct").post(addProduct);
router.route("/getProduct").get(getProducts);
router.route("/deleteProduct/:id").post(deleteProduct);

export default router;
