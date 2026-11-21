import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginCard({ user }) {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    try {
      const response = await axios.post(
        user === "patient"
          ? "http://localhost:3000/api/patient/login"
          : user==="doctor"? 
              "http://localhost:3000/api/doctor/login": user=="admin" && "http://localhost:3000/api/admin/login",
        { username, password }
      );
      console.log(response.data);
      // alert("login successful!")
      // setLoggedIn(true)
      // console.log("set login set true successfully")
      if (user === "patient") navigate("/patient-dashboard");
      else if (user === "doctor") navigate("/doctor-dashboard");
      else if (user === "admin") navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
      // setLoggedIn(false)
      alert("login failed!");
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center border border-gray-300 hover:shadow-xl p-4 rounded-xl"
        action=""
      >
        <h2 className=" bg-purple-400 px-3 py-1 rounded-2xl mb-2">
          {user} login
        </h2>
        <div>
          <label htmlFor="username">username: </label>
          <input
            id="username"
            name="username"
            className="border mt-2 w-40 pl-2 rounded-md"
            type="text"
            placeholder="enter username"
          />
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input
            id="password"
            name="password"
            className="border mt-2 w-40 pl-2 rounded-md"
            type="password"
            placeholder="enter password"
          />
        </div>
        <button
          className=" mt-4 px-2 py-1 rounded-2xl bg-pink-400 hover:cursor-pointer"
          type="submit"
        >
          login
        </button>
        <Link to={user === "patient" ? "/patient/signup" : "/doctor-signup"}>
          {user !== "admin" && (
            <button className="mt-2 text-xs text-blue-700 hover:cursor-pointer">
              new here? sign up!
            </button>
          )}
        </Link>
      </form>
    </div>
  );
}

export default LoginCard;
