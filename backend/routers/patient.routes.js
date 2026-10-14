import express from 'express'
import upload from '../middleware/multer.middleware.js'
import { patientSignup, patientLogin } from '../controllers/patientController.js'

const patientRouter = express.Router()

patientRouter.post("/signup",upload.single("verificationId"),patientSignup)
patientRouter.post('/login',patientLogin)

export default patientRouter