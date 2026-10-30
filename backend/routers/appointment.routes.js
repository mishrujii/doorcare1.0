import express from "express";
import {
  allAppointmentList,
  appointmentHistory,
  createAppointment,
  doctorsAppointmentsList,
  patientAppointment,
  patientAppointments,
  setAppointmentStatus,
} from "../controllers/appointment.controller.js";
import authenticate from "../middleware/auth.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/create-appointment", authenticate, createAppointment);
appointmentRouter.get("/doctors-appointments",authenticate,doctorsAppointmentsList,
);
appointmentRouter.get("/get-patient-appointment/:doctorId",authenticate, patientAppointment)
appointmentRouter.get("/get-patient-appointments", authenticate, patientAppointments)
appointmentRouter.get("/all-appointments", authenticate, allAppointmentList);
appointmentRouter.post("/update-appointment-status", authenticate, setAppointmentStatus)
appointmentRouter.get('/get-appointment-history',authenticate,appointmentHistory)

export default appointmentRouter;
