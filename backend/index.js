import express from "express";
import {Connect} from "./utils/connect.js";
const router = express.Router();
const app = express();

app.use("/", (req, res) => {
  res.send("This is backend");
});

Connect();

import userRoute from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

app.use("/api/user", userRoute);
app.use("/api/user", productRouter);

app.listen(5000, () => {
  console.log("This is backend running");
});
