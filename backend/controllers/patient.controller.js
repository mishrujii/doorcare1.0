import jwt from "jsonwebtoken";
import patientModel from "../models/patient.model.js";
import uploadToCloudinary from "../services/cloud.js";
import reviewModel from "../models/review.model.js";

export const patientSignup = async (req, res) => {
  const { name, username, email, DOB, password, contact, address } = req.body;
  const image = await uploadToCloudinary(req.files.verificationId[0]);

  const user = await patientModel.create({
    name,
    email,
    username,
    role: "patient",
    DOB,
    password,
    contact,
    address,
    verificationId: image.secure_url,
  });
  const token = jwt.sign(
    {
      userId: user._id,
      role: "patient",
    },
    process.env.JWT_SECRET,
  );

  return res.cookie("token", token).status(200).json({
    message: "Patient Registration Successful",
  });
};

export const patientLogin = async (req, res) => {
  // console.log(req)
  const { username, password } = req.body;
  const user = await patientModel.findOne({ username });
  if (user) {
    if (user.password === password) {
      console.log("login successful");
      const token = jwt.sign(
        {
          userId: user._id,
          role: "patient",
        },
        process.env.JWT_SECRET,
      );
      // res.cookie("token", token);
      return res.cookie("token", token).status(200).json({
        message: "Patient Login Successful",
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

export const fetchPatientsList = async (req, res) => {
  const patients = await patientModel.find();
  return res.status(200).json(patients);
};

export const createDoctorReview = async (req, res) => {
  const { doctor, reviewText, reviewRating } = req.body;
  const patient = req.user.userId;
  // console.log(doctor, patient);
  const review = await reviewModel.create({
    reviewText,
    reviewRating,
    doctor,
    patient,
  });
  return res.status(200).json(review);
};

export const fetchDoctorReviews = async (req, res) => {
  // console.log("controller reached");
  const doctor = req.params.doctorId;
  // console.log("doctorId: ", doctor);
  try {
    const reviews = await reviewModel.find({ doctor }).populate("patient");
    // console.log(reviews.length);
    return res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "coudn't fetch reviews",
    });
  }
};
