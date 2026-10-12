import express from 'express'
import connectDB from './db.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

connectDB()



app.listen(3000,()=>console.log("server running at port 3000"))
