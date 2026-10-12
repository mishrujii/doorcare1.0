import { Link } from "react-router-dom"

function DoctorCard() {
  return (
    <>
    <div className="border border-gray-300 hover:shadow-xl w-fit rounded-xl overflow-hidden text-xs flex flex-col mr-10 mt-6">
        <img src="coma-dp.jpg" width='150' alt="" className="object-cover"/>
        <div className="flex flex-col items-start mx-auto">
            <h2>Dr. Comatozze</h2>
            <h2>Gynecologist, 5 Years</h2>
            <h2>Fee: ₹70000/-</h2>
            <h2>Rating: 4.9</h2>
        </div>
        <div className="flex justify-center">
          <Link to="/doctor-description">
            <button className="mt-1 mb-1 px-2 rounded-xl bg-blue-400 hover:cursor-pointer">Select</button>
          </Link>
        </div>
    </div>
    
    </>
  )
}

export default DoctorCard