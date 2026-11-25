import LoginCard from "./LoginCard";
import Navbar from "../components/Navbar";

function DoctorLoginPage() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen justify-center items-center">
        <LoginCard user="doctor" />
      </div>
    </>
  );
}

export default DoctorLoginPage;
