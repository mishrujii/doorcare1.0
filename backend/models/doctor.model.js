import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        // required: true
    },
    institue: {
        type: String,
        // required: true
    },
    gradYear: {
        type: String,
        // required: true
    },
    experience: {
        type: Number,
        // required: true
    },
    medicalRegistrationNumber: {
        type: Number,
        // required: true
    },
    registrationCertificate: {
        type: String,
        // required: true
    },
    specialization: {
        type: String,
        // required: true
    },
    fee: {
        type: Number,
        required: true
    },
    rating: {
        type: Number
    }
})

const doctorModel = mongoose.model('doctor',doctorSchema)

export default doctorModel