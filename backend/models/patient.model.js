import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  verificationId: {
    type: String,
    required: true,
  },
  medicalRecords: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "https://unsplash.com/illustrations/a-man-wearing-a-blue-vest-and-bow-tie-Olaz24QWjZI"
  }
});

const patientModel = mongoose.model("patient", patientSchema);

export default patientModel;
