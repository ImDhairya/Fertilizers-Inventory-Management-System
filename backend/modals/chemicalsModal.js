import mongoose from "mongoose";

const chemicalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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

  // userDetails: {
  //   type: String,
  //   required: true,
  // },

  userDetails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],

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
