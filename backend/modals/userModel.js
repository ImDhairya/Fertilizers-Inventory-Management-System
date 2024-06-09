import mongoose from "mongoose";

const users = new mongoose.model({
  type: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  institutename: {
    type: String,
  },
  marketCap: {
    type: String,
  },
});

export const Users = mongoose.model("Users", users);
