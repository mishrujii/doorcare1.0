import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db.js";
import patientRouter from "./routers/patient.routes.js";
import doctorRouter from "./routers/doctor.routes.js";
import adminRouter from "./routers/admin.routes.js";
import appointmentRouter from "./routers/appointment.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors(),
  // {
  //     origin: "http://localhost:5173",
  //     credentials: true
  // }
);
app.use(cookieParser());

connectDB();

app.use("/api/patient", patientRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/admin", adminRouter);
app.use("/api/appointment", appointmentRouter);

app.listen(3000, () => console.log("server running at port 3000"));
