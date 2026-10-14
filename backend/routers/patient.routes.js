import express from 'express'
import {signupPatient, loginPatient} from "../controllers/patient.controller.js"
import upload from '../middleware/multer.middleware.js'

const patientRouter = express.Router()

patientRouter.post("/signup",upload.single("image"),signupPatient)
patientRouter.post('/login',loginPatient)

export default patientRouter