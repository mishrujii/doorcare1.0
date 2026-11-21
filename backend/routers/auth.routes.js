import express from 'express'
import { checkLogin, getUserData, logoutUser } from '../controllers/auth.controller.js'
import authenticate from '../middleware/auth.js'

const authRouter = express.Router()

authRouter.post('/logout',logoutUser)
authRouter.get('/check-login',checkLogin)
authRouter.get('/get-user-data',authenticate,getUserData)

export default authRouter