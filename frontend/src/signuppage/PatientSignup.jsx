import SignupCard from "./SignupCard";
import Navbar from "../components/Navbar";

function PatientSignup() {
  return (
    <>
      <Navbar/>
      <div className="flex justify-center items-center h-screen mt-14">
        <SignupCard user="patient" />
      </div>
    </>
  );
}

export default PatientSignup;
