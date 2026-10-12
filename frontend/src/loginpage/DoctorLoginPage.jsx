import LoginCard from "./LoginCard"

function DoctorLoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoginCard user="doctor" />
    </div>
  )
}

export default DoctorLoginPage