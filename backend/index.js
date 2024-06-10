import express from "express";
import {Connect} from "./utils/connect.js";
const router = express.Router();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use("/", (req, res) => {
//   res.send("This is not any route brother");
// });

Connect();

import userRoute from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

app.use("/api/user", userRoute);
app.use("/api/product", productRouter);

app.listen(5000, () => {
  console.log("This is backend running");
});
