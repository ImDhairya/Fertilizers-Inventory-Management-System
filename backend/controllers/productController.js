import mongoose from "mongoose";
import {Chemical} from "../modals/chemicalsModal.js";
import {Users} from "../modals/userModel.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      userId,
      amount,
      description,
      email,
      expDate,
      similarProducts,
      mfgDate,
    } = req.body;
    const user = await Users.findById(userId);
    const chemical = await Chemical.create({
      name,
      amount,
      userDetails: user,
      description,
      expDate,
      similarProducts,
      mfgDate,
      email,
    });

    let ObjId = new mongoose.Types.ObjectId(chemical._id);
    console.log(ObjId);

    await Users.updateOne(
      {email: email},
      {
        $push: {
          chemId: ObjId,
        },
      }
    );

    return res.status(201).json({
      message: "Chemicals added successfully ",
      success: true,
    });
  } catch (error) {
    console.error("Error Chemicals adding:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const content = await Chemical.find({}).populate({
      path: "userDetails",
      model: "Users",
    });
    if (content) {
      return res.status(201).json({
        message: "Fetched data",
        success: true,
        data: content,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const {ObjectId} = mongoose.mongo;
    const _id = new ObjectId(id);
    console.log(_id);
    // const objectId = new mongoose.Types.ObjectId(id);
    // console.log(objectId);
    await Chemical.findByIdAndDelete({_id});
    return res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
