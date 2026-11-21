import express from 'express'
import { checkLogin, logoutUser } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post('/logout',logoutUser)
authRouter.get('/check-login',checkLogin)

export default authRouter