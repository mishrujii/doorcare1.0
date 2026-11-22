import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function DoctorDescriptionPage() {
  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const { doctorId } = useParams();

  const [doctorData, setDoctorData] = useState({
    name: "",
    specialization: "",
    degree: "",
    experience: 0,
    institute: "",
    fee: 0,
  });

  const [doctorReviews, setDoctorReviews] = useState([])

  const [appointmentData, setAppointmentData] = useState(null);
  // const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    async function getDoctorData() {
      const response = await axios.get(
        `http://localhost:3000/api/doctor/${doctorId}`,
      );
      setDoctorData(response.data);
      try {
        const appointmentResponse = await axios.get(
          `http://localhost:3000/api/appointment/get-patient-appointment/${doctorId}`,
        );
        console.log("data:", appointmentResponse.data);
        if (appointmentResponse.data)
          setAppointmentData(appointmentResponse.data);
        else setAppointmentData(null);
      } catch (error) {
        console.log(error);
      }
      try{
        console.log("loaded")
        const reviewResponse = await axios.get(
          `http://localhost:3000/api/patient/get-doctor-reviews/${doctorId}`,
        )
        console.log(reviewResponse.data)
        setDoctorReviews(reviewResponse.data)

      }catch(error){
        console.log(error)
      }
    }
    getDoctorData();
  }, [doctorId]);

  async function handleAppointmentSubmit(e) {
    e.preventDefault();
    const data = {
      appointmentTime: e.target.appointmentTime.value,
      appointmentDate: e.target.appointmentDate.value,
      appointmentConcern: e.target.appointmentConcern.value,
      doctorId,
    };

    console.log(data);
    try {
      await axios.post(
        "http://localhost:3000/api/appointment/create-appointment",
        data,
      );
      alert("appointment submitted");
    } catch (error) {
      alert("appointment failed");
      console.log(error);
    }
    try {
      const appointmentResponse = await axios.get(
        `http://localhost:3000/api/appointment/get-patient-appointment/${doctorId}`,
      );
      console.log(appointmentResponse.data);
      if (appointmentResponse.data)
        setAppointmentData(appointmentResponse.data);
      else setAppointmentData(null);
    } catch (error) {
      console.log(error);
    }
  }

  const today = new Date();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const minDate = formatDate(today);

  const oneMonthLater = new Date(today);
  oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

  const maxDate = formatDate(oneMonthLater);

  const [viewReviewForm, setViewReviewForm] = useState(false);

  async function handleReviewSubmit(e) {
    e.preventDefault();
    const reviewText = e.target.reviewText.value
    const reviewRating = e.target.reviewRating.value
    try{
      await axios.post("http://localhost:3000/api/patient/patient-review",
        {
          reviewText,
          reviewRating,
          doctor: doctorId
        }
      )
      setViewReviewForm(false)
      alert("reivew submitted successfully!")
    }catch(error){
      console.log(error)
      alert("review submission failed!")
    }
    
  }

  return (
    <div>
      <Navbar/>
      <div className="mt-16 ml-10 flex">
        <div className="p-4 rounded-xl border-gray-400 flex border w-fit">
          <img
            className="rounded-sm object-cover"
            src={doctorData.profilePicture}
            width="170"
            alt=""
          />
          <div className="ml-5 *:mt-2 text-md">
            <p>
              <b>Name: </b> {doctorData.name}
            </p>
            <h2>
              <b>Specialization:</b> {doctorData.specialization}
            </h2>
            <h2>
              gender
            </h2>
            <h2>
              <b>Experience:</b> {doctorData.experience} Years
            </h2>
            <h2>
              <b>Medical Degree:</b> {doctorData.degree}
            </h2>
            <h2>
              <b>University/ Institue:</b> {doctorData.institute}
            </h2>
            <h2>
              <b>Fee:</b> ₹{doctorData.fee}/-
            </h2>
          </div>
        </div>
        <div className="ml-10 border rounded-xl border-gray-400 px-4 flex flex-col ">
          <h1 className="text-md mx-auto mb-4 px-2 mt-2 rounded-md bg-purple-300">
            Appointment {appointmentData ? "Details" : "Form"}
          </h1>
          {appointmentData ? (
            appointmentData.status === "completed" ? (
              <form
                className="[&_input]:border [&_input]:rounded-md [&_div]:mb-4 text-sm"
                action=""
                onSubmit={handleAppointmentSubmit}
              >
                <div>
                  <label htmlFor="date">Date: </label>
                  <input
                    className="text-gray-400"
                    min={minDate}
                    max={maxDate}
                    type="date"
                    id="date"
                    name="appointmentDate"
                  />
                </div>
                <div>
                  <label htmlFor="time">Time: </label>
                  <select
                    id="time"
                    name="appointmentTime"
                    defaultValue=""
                    required
                    className="rounded-md border border-gray-300 text-xs p-1 text-gray-500"
                  >
                    <option value="" disabled>
                      Select appointment time
                    </option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
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
                  <button
                    type="submit"
                    className="px-2 rounded-xl bg-yellow-300 hover:cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <p>
                  <b>Status: </b>
                  {appointmentData.status}
                </p>
                <p>
                  <b>Date: </b>
                  {appointmentData.appointmentDate}
                </p>
                <p>
                  <b>Time: </b>
                  {appointmentData.appointmentTime}
                </p>
                <p>fee paid:</p>
              </div>
            )
          ) : (
            <form
              className="[&_input]:border [&_input]:rounded-md [&_div]:mb-4 text-sm"
              action=""
              onSubmit={handleAppointmentSubmit}
            >
              <div>
                <label htmlFor="date">Date: </label>
                <input
                  className="text-gray-400"
                  min={minDate}
                  max={maxDate}
                  type="date"
                  id="date"
                  name="appointmentDate"
                />
              </div>
              <div>
                <label htmlFor="time">Time: </label>
                <select
                  id="time"
                  name="appointmentTime"
                  defaultValue=""
                  required
                  className="rounded-md border border-gray-300 text-xs p-1 text-gray-500"
                >
                  <option value="" disabled>
                    Select appointment time
                  </option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
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
                <button
                  type="submit"
                  className="px-2 rounded-xl bg-yellow-300 hover:cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="ml-10 mt-8 pb-2">
        <div className="border-b">
          Reviews
          <div className=" relative w-fit inline rounded-md px-1 text-xs ml-10 bg-red-300">
            <span
              className="hover:cursor-pointer"
              onClick={() => setViewReviewForm((prev) => !prev)}
            >
              add a review
            </span>
            {viewReviewForm && (
              <form
                onSubmit={handleReviewSubmit}
                className="absolute p-1 w-50  hover:shadow-xl rounded-md bg-red-300 left-20 -top-5 z-10"
              >
                <div className="flex ">
                  <label htmlFor="reviewText">review: </label>
                  <textarea
                    onInput={handleInput}
                    placeholder="enter your review"
                    className="p-1 overflow-hidden ml-1 bg-white rounded-md border w-40"
                    id="reviewText"
                    name="reviewText"
                    type="text"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="reviewRating">rating(out of 5): </label>
                  <input
                    className="bg-white border rounded-md pl-1 no-spinner"
                    id="reviewRating"
                    name="reviewRating"
                    type="number"
                    max="5"
                    min="0"
                  />
                  <button
                    className="hover:cursor-pointer ml-6 px-1 rounded-md bg-yellow-300"
                    type="submit"
                  >
                    submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        {doctorReviews.map((review)=>(
          <div key={review._id} className="text-sm border-b flex items-center mt-2 pb-4">
            <img src={review.patient?.profilePicture} width="30" className="rounded-full" alt="" />
            <div className="flex flex-col ml-2">
              <div className="flex items-center">
                <p className=" text-xs">
                  {review.patient?.username} <span className="text-xs">(1 year ago)</span>
                </p>
                <img src="#" alt="" />
                <p className="ml-2">{review.reviewRating}/5</p>
              </div>
              <div className="">
                <p>
                  {review.reviewText}
                </p>
              </div>
            </div>
          </div>  
        ))}
      </div>
    </div>
  );
}

export default DoctorDescriptionPage;
