import doctorModel from "../models/doctor.model.js";
import uploadToCloudinary from "../services/cloud.js";
import jwt from 'jsonwebtoken'

export const doctorSignup = async (req, res) => {
  const {
    name,
    username,
    email,
    contact,
    address,
    DOB,
    password,
    fee,
    degree,
    institute,
    gradYear,
    experience,
    medicalRegistrationNumber,
    specialization,
  } = req.body;

  const image = await uploadToCloudinary(req.file);

  const user = await doctorModel.create({
    name,
    username,
    email,
    contact,
    address,
    DOB,
    password,
    fee,
    degree,
    institute,
    gradYear,
    experience,
    medicalRegistrationNumber,
    registrationCertificate: image.secure_url,
    specialization,
  });
  
  const token = jwt.sign(
    {
      userId: user._id,
      role: "doctor",
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "Doctor Registration Successful",
  });
};

export const doctorLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await doctorModel.findOne({ username });
  if (user) {
    if (password === user.password) {
      const token = jwt.sign(
        {
          userId: user._id,
          role: "doctor",
        },
        process.env.JWT_SECRET,
      );
      res.cookie("token", token);
      res.status(200).json({
        message: "Doctor Registration Successful",
      });
    } else
      res.status(401).json({
        message: "incorrect password",
      });
  } else
    res.status(404).json({
      message: "user doesn't exist",
    });
};

export const fetchDoctorsList = async (req, res) => {
  const doctors = await doctorModel.find();
  res.status(200).json({
    message: doctors,
  });
};

export const fetchDoctor = async (req, res) => {
  const doctor = await doctorModel.find(req.body.username);
  res.status(200).json({
    message: doctor,
  });
};
