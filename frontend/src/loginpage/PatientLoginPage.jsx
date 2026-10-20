import LoginCard from "./LoginCard";

function PatientLoginPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginCard user="patient" />
    </div>
  );
}

export default PatientLoginPage;
