import express from "express";
import { doctorLogin, doctorSignup, fetchDoctor, fetchDoctorsList } from "../controllers/doctor.controller.js";
import authenticate from "../middleware/auth.js";

const doctorRouter = express.Router()

doctorRouter.post('/signup', doctorSignup)
doctorRouter.post('/login',doctorLogin)
doctorRouter.get('/list',authenticate,fetchDoctorsList)
doctorRouter.get('/:username',authenticate,fetchDoctor)

export default doctorRouter