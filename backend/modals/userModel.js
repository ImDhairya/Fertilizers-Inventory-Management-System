import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    institutename: {
      type: String,
    },
    marketCap: {
      type: String,
    },
  },
  {timestamps: true}
);

export const Users = mongoose.model("Users", userSchema);
