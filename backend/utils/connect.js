import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const Connect = () => {
  try {
    mongoose.connect(process.env.MONGOOSE_URL).then(() => {
      console.log("Successfully connected to db ");
    });
  } catch (error) {
    console.log("Error connecting to db ", error);
  }
};
