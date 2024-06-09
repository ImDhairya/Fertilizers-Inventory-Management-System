import mongoose from "mongoose";

const chemicals = new mongoose.model({
  type: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  marketprice: {
    type: String,
  },
  manufacturingdate: {
    type: String,
  },
  expiringdate: {
    type: String,
  },
  similarproducts: {
    type: String,
  },
});

export const Chemicals = mongoose.model("Chemicals", chemicals);
