import User from "../modals/usermodal.js";
import generateToken from "../utils/token.js";
import bcrypt from "bcryptjs";


export const login = async (req, res) => {
  console.log("Request body:", req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    console.log("User found:", user);
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log("User found:", user);


    const isMatch = await bcrypt.compare(password, user.password);
     console.log("Password match:", isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
   

    generateToken(res, user._id);

    res.json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
