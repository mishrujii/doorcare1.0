import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function PatientAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);
  // const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "http://localhost:3000/api/appointment/get-patient-appointments",
      );
      console.log(response.data);
      const sortedAppointments = [...response.data].sort(
        (a, b) => {
          let dateTimeA = new Date(`${a.appointmentDate.split("T")[0]}T${a.appointmentTime}`)
          let dateTimeB = new Date(`${b.appointmentDate.split("T")[0]}T${b.appointmentTime}`)
          return dateTimeA - dateTimeB
        }
      );
      console.log(sortedAppointments);
      setAppointments(sortedAppointments);
      const response2 = await axios.get(
        "http://localhost:3000/api/appointment/get-appointment-history",
      );
      // console.log(response2.data);
      const sortedCompletedAppointments = [...response2.data].sort(
        (a,b)=>{
          let dateTimeA = new Date(`${a.appointmentDate.split("T")[0]}T${a.appointmentTime}`)
          let dateTimeB = new Date(`${b.appointmentDate.split("T")[0]}T${b.appointmentTime}`)
          return dateTimeB - dateTimeA;
        }
      )
      setCompletedAppointments(sortedCompletedAppointments);
    }
    getData();
  }, []);

  // const handleAppointmentCompletion = async (appointmentId) => {
  //   await axios.post(
  //     "http://localhost:3000/api/appointment/update-appointment-status",
  //     { appointmentId, setStatus: "completed" },
  //   );
  //   const response = await axios.get(
  //     "http://localhost:3000/api/appointment/get-patient-appointments",
  //   );
  //   setAppointments(response.data);
  //   const response2 = await axios.get(
  //     "http://localhost:3000/api/appointment/get-appointment-history",
  //   );
  //   setCompletedAppointments(response2.data);
  // };

  return (
    <div>
      <Navbar />
      <div className="mt-16 ml-4">
        <p className="mb-3 w-fit rounded-md px-1 bg-yellow-300">
          current appointments
        </p>
        <table className="border [&_th]:border [&_th]:px-2 [&_td]:border [&_td]:px-2 [&_td]:text-center">
          <tbody>
            <tr>
              <th>Sno</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Fee Paid</th>
            </tr>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointments.indexOf(appointment) + 1}.</td>
                <td>{appointment.appointmentDate?.split("T")[0]}</td>
                <td>{appointment.appointmentTime}</td>
                <td>
                  <Link to={`/doctor-description/${appointment.doctorId._id}`}>
                    {appointment.doctorId.name}{" "}
                  </Link>
                </td>
                <td>
                  {appointment.status}
                  {/* <div className="flex align-center text-xs">
                    <label htmlFor="status">mark as done</label>
                    <input
                      onChange={() =>
                        handleAppointmentCompletion(appointment._id)
                      }
                      className="ml-2"
                      id="status"
                      type="checkbox"
                    />
                  </div> */}
                </td>
                <td>₹{appointment.doctorId.fee}/-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ml-4">
        <p className="mb-3 w-fit rounded-md px-1 bg-yellow-600 mt-4">
          appointment history
        </p>
        <table className="border [&_th]:border [&_th]:px-2 [&_td]:border [&_td]:px-2 [&_td]:text-center">
          <tbody>
            <tr>
              <th>Sno</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Fee Paid</th>
            </tr>
            {completedAppointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{completedAppointments.indexOf(appointment) + 1}.</td>
                <td>{appointment.appointmentDate?.split("T")[0]}</td>
                <td>{appointment.appointmentTime}</td>
                <td>
                  <Link to={`/doctor-description/${appointment.doctorId._id}`}>
                    {appointment.doctorId.name}
                  </Link>
                </td>
                <td>{appointment.status}</td>
                <td>₹{appointment.doctorId.fee}/-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientAppointmentsPage;
