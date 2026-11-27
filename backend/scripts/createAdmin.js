import adminSettingsModel from "../models/admin.model.js";
import dotenv from "dotenv"; 
import connectDB from "../services/db.js";
dotenv.config()

async function createAdmin() {
  try {

    connectDB()

    const existingAdmin = await adminSettingsModel.findOne();
    if (existingAdmin) {
      console.log("Admin already exists!");
      console.log(existingAdmin)
      return;
    } else {
      const admin = await adminSettingsModel.create({});
      console.log("admin settings configured!");
        console.log(admin)
      return;
    }
  } catch (error) {
    console.log("error configuring admin settings", error);
    return;
  }
}

createAdmin();
