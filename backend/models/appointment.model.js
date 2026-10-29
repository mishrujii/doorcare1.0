import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "approved", "rejected"],
    default: "pending",
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  appointmentConcern: {
    type: String,
  },
});

const appointmentModel = mongoose.model("appointment", appointmentSchema);

export default appointmentModel;
