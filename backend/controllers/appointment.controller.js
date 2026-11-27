import appointmentModel from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  const { doctorId, appointmentDate, appointmentTime, appointmentConcern } =
    req.body;

  // const formattedDate = new Date(
  //   `${appointmentDate}T00:00:00`,
  // ).toLocaleDateString("en-IN", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  //   timeZone: "Asia/Kolkata",
  // });
  // const [hours, minutes] = appointmentTime.split(":");

  // const formattedTime = new Date(
  //   `2000-01-01T${hours}:${minutes}:00`,
  // ).toLocaleTimeString("en-IN", {
  //   hour: "numeric",
  //   minute: "2-digit",
  //   hour12: true,
  //   timeZone: "Asia/Kolkata",
  // });

  const patientId = req.user.userId;

  try {
    await appointmentModel.create({
      patientId,
      doctorId,
      appointmentDate,
      appointmentTime,
      appointmentConcern,
    });
    await appointmentModel.find({ doctorId }).populate("patientId");
    return res.status(200).json({
      isSubmitted: true,
      message: "appointment submitted",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      isSubmitted: false,
      message: error,
    });
  }
};

export const patientAppointment = async (req, res) => {
  // console.log("controller reached");
  const patientId = req.user.userId;
  const doctorId = req.params.doctorId;
  const appointment = await appointmentModel.findOne({ patientId, doctorId, status : { $in: ["pending","approved"]} });
  return res.send(appointment)
};

export const patientAppointments = async(req,res)=>{
  const patientId = req.user.userId
  const appointments = await appointmentModel.find({patientId, status: "approved"}).populate("doctorId");
  return res.send(appointments)
}

export const doctorsAppointmentsList = async (req, res) => {
  const doctorId = req.user.userId;
  const appointments = await appointmentModel
    .find({ doctorId })
    .populate("patientId", "name address contact DOB gender");

  return res.status(200).json(appointments);
};

export const allAppointmentList = async (req, res) => {
  const appointments = await appointmentModel.find();
  return res.status(200).json(appointments);
};

export const setAppointmentStatus = async (req, res) => {
  const appointment = await appointmentModel.findByIdAndUpdate(
    req.body.appointmentId,
    { status:  req.body.setStatus},
  );
  return res.send({
    message: "status updated",
  });
};

export const appointmentHistory = async (req,res)=>{
  const appointments = await appointmentModel.find({status: {$in: ["completed","rejected"]}}).populate("doctorId")
  return res.send(appointments)
}