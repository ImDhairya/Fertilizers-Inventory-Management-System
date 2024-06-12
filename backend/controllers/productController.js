import {Chemical} from "../modals/chemicalsModal.js";
import {Users} from "../modals/userModel.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      userId,
      amount,
      description,
      expDate,
      similarProducts,
      mfgDate,
    } = req.body;
    const user = await Users.findById(userId).select("-password");
    await Chemical.create({
      name,
      amount,
      userDetails: user,
      description,
      expDate,
      similarProducts,
      mfgDate,
    });

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
