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
  role: {
    type: String,
    enum: ['patient','doctor','admin'],
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male","Female"],
    required: true
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
    default: "https://plus.unsplash.com/premium_vector-1728553012443-3cf619e7579d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  }
});

const patientModel = mongoose.model("patient", patientSchema);

export default patientModel;
