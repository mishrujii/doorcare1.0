import LoginCard from "./LoginCard";
import Navbar from '../components/Navbar'


function PatientLoginPage({setLoggedIn}) {
  return (
    <>
      <Navbar />
      <div className="flex h-screen justify-center items-center">
        <LoginCard user="patient" setLoggedIn={setLoggedIn} />
      </div>
    </>
  );
}

export default PatientLoginPage;
