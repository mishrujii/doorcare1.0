import LoginCard from "./LoginCard";
import Navbar from '../components/Navbar'


function PatientLoginPage() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen justify-center items-center">
        <LoginCard user="patient" />
      </div>
    </>
  );
}

export default PatientLoginPage;
