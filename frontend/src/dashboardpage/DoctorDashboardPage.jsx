import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorDashboardPage() {

  const navigate = useNavigate()

  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [viewConcern, setViewConcern] = useState(null);

  const handleViewConcern = (appointmentId) => {
    if (viewConcern) {
      return setViewConcern(null);
    } else {
      return setViewConcern(appointmentId);
    }
  };

  async function handleSetStatus(flag, appointmentId) {
    try {
      await axios.post(
        "http://localhost:3000/api/appointment/update-appointment-status",
        {
          setStatus: flag,
          appointmentId,
        },
      );
      alert("appointment status changed");
      navigate(0)
    } catch (error) {
      console.log(error);
      alert("status change failed");
    }
  }
  useEffect(() => {
    async function getDoctorAppointments() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/appointment/doctors-appointments",
        );
        const arrangedAppointments = [...response.data]
          .filter((appointment) => {
            return ["pending", "approved"].includes(appointment.status);
          })
          .sort((a, b) => {
            let dateA = new Date(
              `${a.appointmentDate.split("T")[0]}T${a.appointmentTime}`,
            );
            let dateB = new Date(
              `${b.appointmentDate.split("T")[0]}T${b.appointmentTime}`,
            );
            return dateA - dateB;
          });
        setDoctorAppointments(arrangedAppointments);
        const arrangedCompletedAppointments = [...response.data]
          .filter((appointment) => {
            return ["rejected", "completed"].includes(appointment.status);
          })
          .sort((a, b) => {
            let dateA = new Date(
              `${a.appointmentDate.split("T")[0]}T${a.appointmentTime}`,
            );
            let dateB = new Date(
              `${b.appointmentDate.split("T")[0]}T${b.appointmentTime}`,
            );
            return   dateB-dateA;
          });
        setCompletedAppointments(arrangedCompletedAppointments);
      } catch (error) {
        console.log(error);
      }
    }
    getDoctorAppointments();
  }, []);

  const handleAgeCalculation = (dob)=>{
    const bday = new Date(dob)
    const current = new Date()
    const age = Math.floor((current-bday)/(1000*60*60*24*365))
    return age.toString()
  }

  return (
    <div>
      <Navbar />
      <div className="mt-14 flex flex-col items-center *:ml-4">
        <div className="flex flex-col items-center">
          <p className="mx-auto bg-red-300 px-2 rounded-md mb-4 w-fit">
            today's schedule
          </p>
          <table className="border *:border [&_th]:border [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:px-2 [&_td]:py-1 **:text-center">
            <tbody>
              <tr>
                <th>SNo</th>
                <th>Date</th>
                <th>Time Slot</th>
                <th>Patient Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Approval</th>
              </tr>
              {doctorAppointments.map(
                (appointment) => (
                    <tr key={appointment._id}>
                      <td>{doctorAppointments.indexOf(appointment) + 1}</td>
                      <td>{appointment.appointmentDate.split("T")[0]}</td>
                      <td>{appointment.appointmentTime}</td>
                      <td>{appointment.patientId.name}</td>
                      <td>{appointment.patientId.gender}</td>
                      <td>{handleAgeCalculation(appointment.patientId.DOB)}</td>
                      <td>{appointment.patientId.address}</td>
                      <td>{appointment.patientId.contact}</td>
                      <td>
                        <div
                          onClick={() => handleViewConcern(appointment._id)}
                          className="relative border text-sm bg-slate-200 hover:cursor-pointer px-1"
                        >
                          view
                          {viewConcern == appointment._id && (
                            <div className="absolute h-fit w-fit bg-white border top-6 -left-9 p-2 text-xs rounded-md shadow-xl z-10">
                              <p>{appointment.appointmentConcern}</p>
                            </div>
                          )}
                        </div>
                      </td>
                      <td>{appointment.status}</td>
                      <td>
                        {appointment.status === "pending" && (
                          <div className="flex text-xs *:hover:cursor-pointer">
                            <button
                              onClick={() =>
                                handleSetStatus("approved", appointment._id)
                              }
                              className="bg-green-400 px-1 rounded-md"
                            >
                              accept
                            </button>
                            <button
                              onClick={() =>
                                handleSetStatus("rejected", appointment._id)
                              }
                              className="ml-2 bg-red-400 px-1 rounded-md"
                            >
                              reject
                            </button>
                          </div>
                        )}
                        {appointment.status === "approved" && (
                          <div className="bg-green-500 text-xs py-1 rounded-md">
                            approved
                          </div>
                        )}
                        {appointment.status === "rejected" && (
                          <div className="bg-red-500 text-xs py-1 rounded-md">
                            rejected
                          </div>
                        )}
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <p className="rounded-md px-1 bg-yellow-600 mb-4">
            appointments history
          </p>
          <div>
            <table className="border *:border [&_th]:border [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:px-2 [&_td]:py-1 **:text-center">
              <tbody>
                <tr>
                  <th>SNo</th>
                  <th>Date</th>
                  <th>Time Slot</th>
                  <th>Patient Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Issue</th>
                  <th>Status</th>
                </tr>
                {completedAppointments.map(
                  (appointment) => (
                      <tr key={appointment._id}>
                        <td>{completedAppointments.indexOf(appointment) + 1}</td>
                        <td>{appointment.appointmentDate.split("T")[0]}</td>
                        <td>{appointment.appointmentTime}</td>
                        <td>{appointment.patientId.name}</td>
                        <td>{appointment.patientId.gender}</td>
                        <td>{handleAgeCalculation(appointment.patientId.DOB)}</td>
                        <td>
                          <div
                            onClick={() => handleViewConcern(appointment._id)}
                            className="relative border text-sm bg-slate-200 hover:cursor-pointer px-1"
                          >
                            view
                            {viewConcern == appointment._id && (
                              <div className="absolute h-fit w-fit bg-white border top-6 -left-9 p-2 text-xs rounded-md shadow-xl z-10">
                                <p>{appointment.appointmentConcern}</p>
                              </div>
                            )}
                          </div>
                        </td>
                        <td>{appointment.status}</td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboardPage;
