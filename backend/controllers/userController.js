import {Users} from "../modals/userModel.js";
import bcyrpt from "bcryptjs";
export const Register = async (req, res) => {
  try {
    const {email, username, password, name} = req.body;

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
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await Users.find({email});

    if (!user) {
      return res.json({
        message: "Cannot find the user please try different name",
        success: false,
      });
    }

    const isMatch = await bcyrpt(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect details",
        success: false,
      });
    }

     const token = await jwt.sign(
       {userId: user._id},
       process.env.TOKEN_SECRET,
       {
         expiresIn: "1d",
       }
     );

     return res
       .status(201)
       .cookie("token", token, {expiresIn: "1d", httpOnly: true})
       .json({
         messagee: `Welcome back ${user.name}`,
         user,
         success: true,
       });
  } catch (error) {
    return res.send("Error login", error);
  }
};

export const logout = (req, res) => {
  console.log("Logged out");
};
