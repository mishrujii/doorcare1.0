import appointmentModel from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  const {patientId, doctorId, status, date, time, concern } = req.body;
  await appointmentModel.create({
    patientId,
    doctorId,
    status,
    date,
    time,
    concern,
  });
  res.status(200).json({
    message: "appointment submitted",
  });
};

export const doctorsAppointmentsList = async (req, res) => {
  const doctorId = req.user.userId;
  const appointments = await appointmentModel.find({ doctorId });
  res.status(200).json(appointments);
};

export const allAppointmentList = async (req, res) => {
  const appointments = await appointmentModel.find();
  res.status(200).json(appointments);
};
