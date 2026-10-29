import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import DoctorCard from "./DoctorCard";

function PatientDashBoardPage({loggedIn}) {
  const [doctorsList, setDoctorsList] = useState([]);
  useEffect(() => {
    console.log(loggedIn)
    async function getDoctorsList() {
      const response = await axios.get("http://localhost:3000/api/doctor/list");
      setDoctorsList(response.data);
    }
    getDoctorsList();
  }, []);
  return (
    <div className="h-screen ">
      <Navbar loggedIn={loggedIn}/>
      <div className="mt-14">
        <div className="flex">
          <input
            name="search"
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
