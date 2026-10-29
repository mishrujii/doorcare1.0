import SignupCard from "./SignupCard";

function PatientSignup({setLoggedIn}) {
  return (
    <div className="flex h-screen justify-center items-center">
      <SignupCard user="patient" setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default PatientSignup;
