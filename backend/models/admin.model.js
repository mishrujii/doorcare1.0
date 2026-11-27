import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

console.log("ADMIN_USERNAME:", process.env.ADMIN_USERNAME);
console.log("ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD);

const adminSettingsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "admin",
        required: true
    },
    username: {
        type: String,
        default: process.env.ADMIN_USERNAME,
        required: true
    },
    role: {
        type: String,
        default: "Admin",
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://plus.unsplash.com/premium_vector-1728553012443-3cf619e7579d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    password: {
        type: String,
        default: process.env.ADMIN_PASSWORD,
        required: true
    }
})

const adminSettingsModel = mongoose.model('admin',adminSettingsSchema)

export default adminSettingsModel