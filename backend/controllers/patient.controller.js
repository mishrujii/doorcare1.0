import patientModel from "../models/patient.model.js"
import uploadToCloudinary from '../services/cloud.js'

export const patientSignup = async (req,res)=>{
    const {name, username, email, DOB, password, contact, address} = req.body
    const image = await uploadToCloudinary(req.files.verificationId[0])

    await patientModel.create({
        name, email, username, DOB, password, contact, address, verificationId : image.secure_url
        
    })
    res.send("user created")

}

export const patientLogin = async (req,res)=>{
    const {username, password} = req.body
    const user = await patientModel.findOne({username})
    if(user){
        if(user.password === password){
            console.log("login successful")
        }
        else{
            console.log("incorrect password")
        }
    }
    else{
        console.log("invalid username")
    }
}

export const fetchPatientsList = async (req,res)=>{
    const patients = await patientModel.find()
    res.status(200).json(patients)
}

