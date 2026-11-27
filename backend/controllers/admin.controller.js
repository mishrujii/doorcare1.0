import jwt from 'jsonwebtoken'
import adminSettingsModel from '../models/admin.model.js';

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await adminSettingsModel.findOne()
  if (username == admin.username) {
    if (password == admin.password) {
      const token = jwt.sign(
        {
          userId: admin._id,
          role: "admin",
        },
        process.env.JWT_SECRET,
      );
      return res.cookie("token", token).status(200).json({
        message: "Admin Registration Successful",
      });
    } else
      return res.status(401).json({
        message: "incorrect password",
      });
  } else
    return res.status(404).json({
      message: "user doesn't exist",
    });
};
