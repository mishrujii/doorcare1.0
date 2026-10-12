import Navbar from "../components/Navbar"
import DoctorCard from "./DoctorCard"

function PatientDashBoardPage() {
  return (
    <div className="h-screen ">
        <Navbar/>
        <div className="mt-14">
          <div className="flex">
            <input className="mx-auto bg-gray-300 rounded-xl pl-4 " type="text" placeholder="search"/>
          </div>
          <div className="ml-10 flex flex-wrap">
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
          
          </div>
        </div>
    </div>
  )
}

export default PatientDashBoardPage