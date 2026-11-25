import Navbar from "../components/Navbar";
import SignupCard from "./SignupCard";

function DoctorSignup() {
  return (
    <>
      <Navbar/>
      <div className="flex justify-center items-center h-screen mt-14">
        <SignupCard user="doctor" />
      </div>
    </>
  );
}

export default DoctorSignup;
