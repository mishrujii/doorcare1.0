import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import DoctorCard from "./DoctorCard";

function PatientDashBoardPage({loggedIn}) {
  const [globalDoctorsList, setGlobalDoctorsList] = useState([]);
  const [doctorsList,setDoctorsList] = useState([]);

  function handleSearch(e){
    const input = e.target.value;
    const filteredDoctorList = globalDoctorsList.filter((doctor)=>((doctor.name.toUpperCase()).includes(input.toUpperCase())))
    setDoctorsList(filteredDoctorList)
  }
  useEffect(() => {
    console.log(loggedIn)
    async function getDoctorsList() {
      const response = await axios.get("http://localhost:3000/api/doctor/list");
      setGlobalDoctorsList(response.data);
      setDoctorsList(response.data);
    }
    getDoctorsList();
  }, []);
  return (
    <div className="h-screen ">
      <Navbar loggedIn={loggedIn}/>
      <div className="mt-14">
        <div className="flex pr-10">
          <input
            name="search"
            className="mx-auto bg-gray-300 rounded-xl pl-4 "
            type="text"
            onChange={handleSearch}
            placeholder="search"
          />
          <div className="hover:cursor-pointer rounded-2xl px-2 text-xs flex items-center bg-purple-300">
            <Link to='/patient-appointments'>
              appointments
            </Link>
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
