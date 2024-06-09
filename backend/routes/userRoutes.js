import express from "express";
const router = express.Router();

import {logout} from "../controllers/userController.js";

router.route("/logout", logout);

export default router;
