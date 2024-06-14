import {Users} from "../modals/userModel.js";
import bcyrpt from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const {email, username, password, name} = req.body;
    console.log(username, email, password, name);

    if (!name || !username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await Users.findOne({email});
    if (user) {
      return res.status(401).json({
        message: "User already exists",
        success: false,
      });
    }
    const hashedPassword = await bcyrpt.hash(password, 14);

    await Users.create({email, password: hashedPassword, name, username});

    return res.status(201).json({
      message: "Accound created successfully ",
      success: true,
    });
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
export const login = async (req, res) => {
  const {email, password} = req.body;
  console.log(email, password);
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await Users.findOne({email});

    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "Cannot find the user please try different name",
        success: false,
      });
    }

    const isMatch = await bcyrpt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect details",
        success: false,
      });
    }
    const token = await jwt.sign({userId: user._id}, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, {expiresIn: "1d", httpOnly: true})
      .json({
        messagee: `Welcome back ${user.name}`,
        user,
        success: true,
      });

    // return res.status(201).json({
    //   messaeg: "Mil gaya mera hiralal",
    // });
  } catch (error) {
    return res.status(401).json({"Error login": error});
  }
};
export const logout = (req, res) => {
  return res.cookie("token", "", {expiresIn: new Date(Date.now())}).json({
    message: "User logged out successfully ",
    success: true,
  });
};
export const getUsers = async (req, res) => {
  try {
    const content = await Users.find({}).populate({
      path: "chemId",
      model: "Chemicals",
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
