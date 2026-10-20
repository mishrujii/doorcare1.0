import express from "express";
import {
  allAppointmentList,
  createAppointment,
  doctorsAppointmentsList,
} from "../controllers/appointment.controller.js";
import authenticate from "../middleware/auth.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/create-appointment", authenticate, createAppointment);
appointmentRouter.get(
  "/doctors-appointments",
  authenticate,
  doctorsAppointmentsList,
);
appointmentRouter.get("/all-appointments", authenticate, allAppointmentList);

export default appointmentRouter;
