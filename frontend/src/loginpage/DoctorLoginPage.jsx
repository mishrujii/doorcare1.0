import LoginCard from "./LoginCard";

function DoctorLoginPage({setLoggedIn}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoginCard user="doctor" setLoggedIn={setLoggedIn}/>
    </div>
  );
}

export default DoctorLoginPage;
