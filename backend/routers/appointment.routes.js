import express from 'express'
import { allAppointmentList, createAppointment, doctorsAppointmentsList } from '../controllers/appointment.controller.js'

const appointmentRouter = express.Router()

appointmentRouter.post('/create-appointment',createAppointment)
appointmentRouter.get('/doctors-appointments',doctorsAppointmentsList)
appointmentRouter.get('/all-appointments',allAppointmentList)

export default appointmentRouter