import express from 'express'
import signupPatient from '../controllers/patient.controller.js'

const patientRouter = express.Router()

patientRouter.post("/signup",signupPatient)
// patientRouter.post("/login",loginPatient)

export default patientRouter