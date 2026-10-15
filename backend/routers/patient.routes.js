import express from 'express'
import upload from '../middleware/multer.middleware.js'
import { patientSignup, patientLogin, fetchPatientsList } from '../controllers/patient.controller.js'

const patientRouter = express.Router()

patientRouter.post("/signup",upload.single("verificationId"),patientSignup)
patientRouter.post('/login',patientLogin)
patientRouter.get('/patients-list',fetchPatientsList)

export default patientRouter