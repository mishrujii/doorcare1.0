import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function AdminDashboardPage() {
  return (
    <div>
      <Navbar/>
      <div className="mt-14 ml-10 flex">
        <div>
          <div className="flex">
            <Link to="/doctor-registration">
              <div className="border p-2 rounded-md bg-red-300">
                Doctor's Registration
              </div>
            </Link>
          </div>
          <div className="flex mt-10">
            <Link to="/registered-doctors">
              <div className="border bg-amber-300 p-2 rounded-md hover:cursor-pointer">
                Registered Doctors
              </div>
            </Link>
            <Link to="/registered-patients">
              <div className="border ml-5 bg-purple-300 p-2 rounded-md hover:cursor-pointer">
                Registered Patients
              </div>
            </Link>
          </div>
        </div>
        <div className="ml-20">ongoing appointments list</div>
      </div>
      <div className="mt-10 ml-10">
        <p>appointments history</p>
        <table className="border *:border [&_th]:border [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:px-2 [&_td]:py-1 **:text-center">
          <tr>
            <th>Sno</th>
            <th>Appointment Id</th>
            <th>Doctor Id</th>
            <th>Patient Id</th>
            <th>Status</th>
            <th>date</th>
            <th>time</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>#12234</td>
            <td>sda1213</td>
            <td>fdg24134</td>
            <td>completed</td>
            <td>02-06-2026</td>
            <td>1200</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
