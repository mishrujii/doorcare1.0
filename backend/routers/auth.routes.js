import express from 'express'
import upload from '../middleware/multer.middleware.js'
import { changeUserPassword, checkLogin, getUserData, logoutUser, updateUserData } from '../controllers/auth.controller.js'
import authenticate from '../middleware/auth.js'

const authRouter = express.Router()

authRouter.post('/logout',logoutUser)
authRouter.get('/check-login',checkLogin)
authRouter.get('/get-user-data',authenticate,getUserData)
authRouter.post('/update-user-data',upload.single('profilePicture'),authenticate,updateUserData)
authRouter.post('/update-user-password',authenticate,changeUserPassword)

export default authRouter