import SignupCard from "./SignupCard";

function DoctorSignup({setLoggedIn}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignupCard user="doctor" setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default DoctorSignup;
