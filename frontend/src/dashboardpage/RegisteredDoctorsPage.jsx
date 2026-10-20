import Navbar from "../components/Navbar";

function RegisteredDoctorsPage() {
  return (
    <div>
      <Navbar />
      <div className="ml-10 mt-14">
        <p>Doctor's List</p>
        <table className="border *:border [&_th]:border [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:px-2 [&_td]:py-1 **:text-center">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Medical Registration No</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default RegisteredDoctorsPage;
