import express from "express";
const router = express.Router();

import {
  logout,
  login,
  Register,
  getUsers,
} from "../controllers/userController.js";

router.route("/logout").post(logout);
router.route("/login").post(login);
router.route("/register").post(Register);
router.route("/getUsers").get(getUsers);

export default router;
