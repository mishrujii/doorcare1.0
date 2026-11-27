import jwt from "jsonwebtoken";
import patientModel from "../models/patient.model.js";
import doctorModel from "../models/doctor.model.js";
import adminSettingsModel from "../models/admin.model.js";
import uploadToCloudinary from "../services/cloud.js";

export const logoutUser = (req, res) => {
  try {
    return res.clearCookie("token").status(200).json({
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
    return res.status(401).json({
      success: false,
      message: "invalid or expired token",
    });
  }
};

export const getUserData = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    if (user.role == "patient") {
      const data = await patientModel.findById(user.userId);
      console.log(data);
      return res.status(200).json({
        user: data,
      });
    } else if (user.role == "doctor") {
      const data = await doctorModel.findById(user.userId);
      return res.status(200).json({
        user: data,
      });
    } else if (user.role == "admin") {
      const data = await adminSettingsModel.findOne();
      return res.status(200).json({
        user: data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    if (user.role == "admin") {
      const { name, username } = req.body;
      const userData = await adminSettingsModel.findOne();
      let profilePicture = userData.profilePicture;
      if (req.file) {
        const image = await uploadToCloudinary(req.file);
        profilePicture = image.secure_url;
      }
      await adminSettingsModel.findByIdAndUpdate(userData._id, {
        name,
        username,
        profilePicture,
      });
      console.log("profile updated successfully!");
      return res.status(200).json({
        success: true,
        message: "Profile updated successfully!",
      });
    }
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
      console.log("profile updated successfully!");
      return res.status(200).json({
        success: true,
        message: "Profile updated successfully!",
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
      console.log("profile updated successfully!");
      return res.status(200).json({
        success: true,
        message: "Profile updated successfully!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const changeUserPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    let userData;
    if (user.role == "patient") {
      userData = await patientModel.findById(user.userId);
      if (oldPassword == userData.password) {
        if (oldPassword != newPassword) {
          await patientModel.findByIdAndUpdate(user.userId, {
            password: newPassword,
          });
          return res.status(200).json({
            success: true,
            message: "password changed successfully!",
          });
        }
      } else {
        return res.json({
          success: false,
          message: "incorrect password!",
        });
      }
    } else if (user.role == "doctor") {
      userData = await doctorModel.findById(user.userId);
      if (oldPassword == userData.password) {
        if (oldPassword != newPassword) {
          await doctorModel.findByIdAndUpdate(user.userId, {
            password: newPassword,
          });
          return res.status(200).json({
            success: true,
            message: "password changed successfully!",
          });
        }
      } else {
        return res.json({
          success: false,
          message: "incorrect password!",
        });
      }
    } else if (user.role == "admin") {
      userData = await adminSettingsModel.findById(user.userId);
      if (oldPassword == userData.password) {
        if (oldPassword != newPassword) {
          await adminSettingsModel.findByIdAndUpdate(user.userId, {
            password: newPassword,
          });
          return res.status(200).json({
            success: true,
            message: "password changed successfully!",
          });
        } else {
          return res.status(400).json({
            success: false,
            message: "New password must be different",
          });
        }
      } else {
        return res.json({
          success: false,
          message: "incorrect password!",
        });
      }
    }
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};
