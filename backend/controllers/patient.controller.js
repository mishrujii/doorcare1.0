import patientModel from "../models/patient.model.js"
import imageKit from "../services/cloud.js"

const signupPatient = async (req,res)=>{
    const {name, username, email, DOB, password, contact, address, verificationId} = req.body
    const image = imageKit(verificationId)
    await patientModel.create({
        name, email, username, DOB, password, contact, address, verificationId : image
        
    })
    res.send("user created")
}

export default signupPatient