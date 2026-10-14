import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
    image: {
        type: String,
        required: true
    },
    medicalRecords: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
})

const patientModel = mongoose.model('patient',patientSchema)

export default patientModel