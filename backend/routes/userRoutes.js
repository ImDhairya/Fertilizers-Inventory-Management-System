import express from "express";
const router = express.Router();

import {logout, login} from "../controllers/userController.js";

router.route("/logout").post(logout);
router.route("/login").post(login);

export default router;
