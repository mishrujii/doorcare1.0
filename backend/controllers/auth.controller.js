import jwt from "jsonwebtoken";
import patientModel from "../models/patient.model.js";
import doctorModel from "../models/doctor.model.js";
import uploadToCloudinary from "../services/cloud.js";

export const logoutUser = (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const checkLogin = (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.json({
        success: false,
        message: "not authenticated",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({
      success: true,
      user: decoded,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "invalid or expired token",
    });
  }
};

export const getUserData = async (req, res) => {
  const user = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
  try {
    if (user.role == "patient") {
      const data = await patientModel.findById(user.userId);
      console.log(data);
      return res.status(200).json({
        user: data,
      });
    } else if (user.role == "doctor") {
      return res.status(200).json({
        user: await doctorModel.findById(user.userId),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserData = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    const { name, username, email, DOB, contact, address } = req.body;
    if (user.role == "patient") {
      const userData = await patientModel.findById(user.userId);
      let profilePicture = userData.profilePicture;
      if (req.file) {
        const image = await uploadToCloudinary(req.file);
        profilePicture = image.secure_url;
      }
      await patientModel.findByIdAndUpdate(user.userId, {
        profilePicture,
        name,
        username,
        email,
        DOB,
        contact,
        address,
      });
    } else if (user.role == "doctor") {
      const userData = await doctorModel.findById(user.userId);
      let profilePicture = userData.profilePicture;
      if (req.file) {
        const image = await uploadToCloudinary(req.file);
        profilePicture = image.secure_url;
      }
      await doctorModel.findByIdAndUpdate(user.userId, {
        profilePicture,
        name,
        username,
        email,
        DOB,
        contact,
        address,
      });
    }
    console.log("profile updated successfully!");
    return res.status(200).json({
      success: true,
      message: "Profile updated successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
