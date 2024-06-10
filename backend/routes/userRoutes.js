import express from "express";
const router = express.Router();

import {logout, login, Register} from "../controllers/userController.js";

router.route("/logout").post(logout);
router.route("/login").post(login);
router.route("/register").post(Register);

export default router;
