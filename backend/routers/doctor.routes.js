import express from "express";
import { doctorLogin, doctorSignup, fetchDoctorsList } from "../controllers/doctor.controller.js";

const doctorRouter = express.Router()

doctorRouter.post('/signup', doctorSignup)
doctorRouter.post('/login',doctorLogin)
doctorRouter.get('/list',fetchDoctorsList)

export default doctorRouter