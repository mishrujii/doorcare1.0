import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function DoctorDashboardPage() {
  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [viewConcern, setViewConcern] = useState(false);

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
        setDoctorAppointments(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDoctorAppointments();
  }, [doctorAppointments]);

  return (
    <div>
      <Navbar/>
      <div className="mt-14 flex *:ml-4">
        <div>
          <p className="mx-auto bg-red-300 px-2 rounded-md mb-4 w-fit">
            today's schedule
          </p>
          <table className="border *:border [&_th]:border [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:px-2 [&_td]:py-1 **:text-center">
            <tbody>
              <tr>
                <th>SNo</th>
                <th>Time</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Issue</th>
                <th>Approve</th>
                <th>Status</th>
              </tr>
              {doctorAppointments.map(
                (appointment) =>
                  appointment.status !== "rejected" && (
                    <tr key={appointment._id}>
                      <td>{doctorAppointments.indexOf(appointment) + 1}</td>
                      <td>{appointment.appointmentTime}</td>
                      <td>{appointment.patientId.name}</td>
                      <td>{appointment.patientId.address}</td>
                      <td>{appointment.patientId.contact}</td>
                      <td>
                        <div
                          onClick={() => setViewConcern((prev) => !prev)}
                          className="relative border text-sm bg-slate-200 hover:cursor-pointer px-1"
                        >
                          view
                          {viewConcern && (
                            <div className="absolute h-fit w-fit bg-white border top-6 -left-9 p-2 text-xs rounded-md shadow-xl">
                              <p>{appointment.appointmentConcern}</p>
                            </div>
                          )}
                        </div>
                      </td>
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
                          <div className="bg-green-500 text-xs p-1 rounded-md">
                            approved
                          </div>
                        )}
                        {appointment.status === "rejected" && (
                          <div className="bg-red-500 text-xs p-1 rounded-md">
                            rejected
                          </div>
                        )}
                      </td>
                      <td>
                        <div className="flex items-center ">
                          <label htmlFor="done">{appointment.status}</label>
                          <input
                            className="mt-1 ml-1"
                            type="checkbox"
                            id="done"
                          />
                        </div>
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
        </div>
        {/* <div>past records</div> */}
      </div>
    </div>
  );
}

export default DoctorDashboardPage;
