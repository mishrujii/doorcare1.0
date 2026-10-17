import express from 'express'
import upload from '../middleware/multer.middleware.js'
import { patientSignup, patientLogin, fetchPatientsList } from '../controllers/patient.controller.js'
import authenticate from '../middleware/auth.js'

const patientRouter = express.Router()

patientRouter.post("/signup",upload.fields([
    { name: "verificationId" },
    { name: "reports" } ]),patientSignup)
patientRouter.post('/login',patientLogin)
patientRouter.get('/patients-list',authenticate,fetchPatientsList)

export default patientRouter