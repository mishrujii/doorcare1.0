import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import DoctorCard from "./DoctorCard";

function PatientDashBoardPage() {
  const [doctorsList, setDoctorsList] = useState([]);
  useEffect(() => {
    async function getDoctorsList() {
      const response = await axios.get("http://localhost:3000/api/doctor/list");
      setDoctorsList(response.data);
    }
    getDoctorsList();
  }, []);
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="mt-14">
        <div className="flex">
          <input
            className="mx-auto bg-gray-300 rounded-xl pl-4 "
            type="text"
            placeholder="search"
          />
        </div>
        <div className="ml-10 flex flex-wrap">
          {doctorsList.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientDashBoardPage;
