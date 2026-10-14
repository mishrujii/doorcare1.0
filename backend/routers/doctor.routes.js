import express from "express";
import { doctorSignup } from "../controllers/doctorController.js";

const doctorRouter = express.Router()

doctorRouter.post('/signup', doctorSignup)

export default doctorRouter