import mongoose from "mongoose";

const chemicalSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
},  );

export const Chemicals = mongoose.modals("Chemicals", chemicalSchema);
