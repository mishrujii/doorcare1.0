import doctorModel from '../models/doctor.model.js'

export const doctorSignup = async (req,res)=>{
    const {name,username,email,contact,address,DOB,password,fee} = req.body
    await doctorModel.create({
        name,username,email,contact,address,DOB,password,fee
    })
    console.log("doctor registered")
    res.send("doctor registered")
}

