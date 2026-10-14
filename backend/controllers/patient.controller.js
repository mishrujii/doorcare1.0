import patientModel from "../models/patient.model.js"
import imageKit from "../services/cloud.js"

const signupPatient = async (req,res)=>{
    const {name, username, email, DOB, password, contact, address} = req.body
    const verificationId = await imageKit(req.file)

    try{await patientModel.create({
        name, email, username, DOB, password, contact, address, image : verificationId.url
        
    })}
    catch(error){
        console.log(error);
        
    }

    res.send("user created")
}

export default signupPatient