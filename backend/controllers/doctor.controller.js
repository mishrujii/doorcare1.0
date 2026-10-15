import doctorModel from '../models/doctor.model.js'

export const doctorSignup = async (req,res)=>{
    const {name,username,email,contact,address,DOB,password,fee} = req.body
    await doctorModel.create({
        name,username,email,contact,address,DOB,password,fee
    })
    console.log("doctor registered")
    res.send("doctor registered")
}

export const doctorLogin = async (req,res)=>{
    const {username, password} = req.body
    const user = await doctorModel.findOne({username})
    if(user){
        if(password===user.password){
            console.log('doctor logged in successfully')
        }
        else console.log("incorrect password!")
    }
    else console.log("invalid username!")
}

export const fetchDoctorsList = async (req,res)=>{
    const doctors = await doctorModel.find()
    res.status(200).json(doctors)
}

export const fetchDoctor = async (req,res)=>{
    const doctor = await doctorModel.find(req.body.username)
    res.status(200).json(doctor)
}
