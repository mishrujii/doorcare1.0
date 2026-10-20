import Navbar from "../components/Navbar";

function RegisteredPatientsPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-14 ml-10">
        <p>Patients List</p>
        <table className="border *:border [&_th]:border [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:px-2 [&_td]:py-1 **:text-center">
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default RegisteredPatientsPage;
