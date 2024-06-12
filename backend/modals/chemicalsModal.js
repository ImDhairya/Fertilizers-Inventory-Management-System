import mongoose from "mongoose";

const chemicalSchema = new mongoose.Schema({
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

  userDetails: {
    type: String,
    required: true,
  },

  mfgDate: {
    type: String,
  },
  expDate: {
    type: String,
  },
  similarProducts: {
    type: String,
  },
});

// export const Chemical = mongoose.modals("Chemicals", chemicalSchema);

export const Chemical = mongoose.model("Chemicals", chemicalSchema);
