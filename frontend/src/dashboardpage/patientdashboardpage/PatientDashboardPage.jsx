import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import DoctorCard from "./DoctorCard";

function PatientDashBoardPage() {
  const [globalDoctorsList, setGlobalDoctorsList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);

  function handleSearchName(e) {
    const input = e.target.value;
    const filteredDoctorList = globalDoctorsList.filter((doctor) =>
      doctor.name.toUpperCase().includes(input.toUpperCase()),
    );
    setDoctorsList(filteredDoctorList);
  }

  function handleSearchSpecialization(e) {
    const input = e.target.value;
    const filteredDoctorList = globalDoctorsList.filter((doctor) =>
      doctor.specialization.toUpperCase().includes(input.toUpperCase()),
    );
    setDoctorsList(filteredDoctorList);
  }

  
  useEffect(() => {
    async function getDoctorsList() {
      const response = await axios.get("http://localhost:3000/api/doctor/list");
      setGlobalDoctorsList(response.data);
      setDoctorsList(response.data);
    }
    getDoctorsList();
  }, []);
  return (
    <div className="h-screen ">
      <Navbar/>
      <div className="mt-14">
        <div className="flex pr-10">
          <div className="mx-auto flex items-center">
            <input
              name="search-name"
              className="bg-gray-300 rounded-xl pl-4 "
              type="text"
              onChange={handleSearchName}
              placeholder="search for name"
            />
            <input 
              type="text" 
              name="search-specialization"
              className="bg-gray-300 rounded-xl ml-4 pl-4 w-40"
              placeholder="specialization"
              onChange={handleSearchSpecialization}
            />
          </div>
          <div className="hover:cursor-pointer rounded-2xl px-2 text-xs flex items-center bg-purple-300">
            <Link to="/patient-appointments">appointments</Link>
          </div>
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
