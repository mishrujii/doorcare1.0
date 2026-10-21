import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function DoctorDescriptionPage() {
  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const {doctorId} = useParams()

  const [doctorData, setDoctorData] = useState({
    name: '',
    specialization: '',
    degree: '',
    experience: 0,
    institute: '',
    fee: 0
  })

  useEffect(()=>{
    async function getDoctorData(){
      const response = await axios.get(`http://localhost:3000/api/doctor/${doctorId}`)
      setDoctorData(response.data)
    }
    getDoctorData()
  },[doctorId])

  async function handleAppointmentSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    
  }
  
  return (
    <div>
      <Navbar />
      <div className="mt-16 ml-10 flex">
        <div className="p-4 rounded-xl border-gray-400 flex border w-fit">
          <img
            className="rounded-sm object-cover"
            src="/coma-dp.jpg"
            width="170"
            alt=""
          />
          <div className="ml-5 *:mt-2 text-md">
            <p>Name: {doctorData.name}</p>
            <h2>Specialization: {doctorData.specialization}</h2>
            <h2>Experience: {doctorData.experience} Years</h2>
            <h2>Mecial Degree: {doctorData.degree}</h2>
            <h2>University/ Institue: {doctorData.institute}</h2>
            <h2>Fee: ₹{doctorData.fee}/-</h2>
          </div>
        </div>
        <div className="ml-10 border rounded-xl border-gray-400 px-4 flex flex-col">
          <h1 className="text-md mx-auto mb-4 px-2 mt-2 rounded-md bg-purple-300">
            Appointment Form
          </h1>
          <form
            className="[&_input]:border [&_input]:rounded-md [&_div]:mb-4 text-sm"
            action=""
            onSubmit={handleAppointmentSubmit}
          >
            <div>
              <label htmlFor="date">Date: </label>
              <input type="date" id="date" name="appointmentDate"/>
            </div>
            <div>
              <label htmlFor="time">Time: </label>
              <input type="time" id="time" name="appointmentTime" />
            </div>
            <div className="flex item-start">
              <label htmlFor="symptom">Symptoms: </label>
              <textarea
                onInput={handleInput}
                className="ml-2 p-1 border rounded-md w-60 text-xs overflow-hidden"
                name="appointmentConcern"
                id="symptom"
                placeholder="describe your health issue"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button type='submit' className="px-2 rounded-xl bg-yellow-300 hover:cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="ml-10 mt-8 pb-2">
        <p className="border-b">Reviews</p>
        <div className="text-sm border-b flex items-center mt-2 pb-4">
          <img src="/dp.png" width="30" className="rounded-full" alt="" />
          <div className="flex flex-col ml-2">
            <div className="flex items-center">
              <p className=" text-xs">
                aman-kr-mishra <span className="text-xs">(1 year ago)</span>
              </p>
              <img src="#" alt="" />
              <p className="ml-2">4.5/5</p>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDescriptionPage;
