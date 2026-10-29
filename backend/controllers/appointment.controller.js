import appointmentModel from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  const { doctorId, appointmentDate, appointmentTime, appointmentConcern } =
    req.body;
  const patientId = req.user.userId;
  try{
    await appointmentModel.create({
    patientId,
    doctorId,
    appointmentDate,
    appointmentTime,
    appointmentConcern,
  });
  await appointmentModel.find({doctorId}).populate('patientId')
  res.status(200).json({
    isSubmitted: true,
    message: "appointment submitted",
  });
}catch(error){
  res.status(404).json({
    isSubmitted: false,
    message: error
  })
  console.log(error)
}
};

export const patientAppointment = async(req,res)=>{
    console.log("controller reached")
    const patientId = req.user.userId;
    const doctorId = req.params.doctorId
    const appointment = await appointmentModel.findOne({patientId,doctorId}) 
    console.log(appointment)
    if(appointment) res.send(appointment)
    // res.send(appointment)
}

export const doctorsAppointmentsList = async (req, res) => {
  const doctorId = req.user.userId;
  const appointments = await appointmentModel.find({ doctorId }).populate('patientId','name address contact');

  res.status(200).json(appointments);
};

export const allAppointmentList = async (req, res) => {
  const appointments = await appointmentModel.find();
  res.status(200).json(appointments);
};

export const setAppointmentStatus = async (req,res) => {
  const appointment = await appointmentModel.findByIdAndUpdate(
    req.body.appointmentId,
    {status: req.body.setStatus? "approved":"rejected"}
  )
  res.send({
    message: "status updated"
  })
}
