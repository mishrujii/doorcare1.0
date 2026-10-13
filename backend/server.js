import express from 'express'
import connectDB from './db.js'
import dotenv from 'dotenv'
import patientRouter from './routers/patient.routes.js'

dotenv.config()

const app = express()

app.use(express.json())

connectDB()

app.use('/api/patient',patientRouter)



app.listen(3000,()=>console.log("server running at port 3000"))
