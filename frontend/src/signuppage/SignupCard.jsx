import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupCard({ user, setLoggedIn }) {
  const navigate = useNavigate();

  async function signupHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    console.log("form data recieved");
    try {
      const response = await axios.post(
        user === "patient"
          ? "http://localhost:3000/api/patient/signup"
          : "http://localhost:3000/api/doctor/signup",
        formData,
      );
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      console.log(response.data);
      setLoggedIn(true)
      if (user === "patient") navigate("/patient-dashboard");
      else if (user === "doctor") navigate("/doctor-dashboard");
      // alert("Signup successful!");
    } catch (error) {
      console.error(error.response?.data || error.message);
      setLoggedIn(false)
      alert(error.response?.data?.message || "Signup failed!");
    }
  }

  return (
    <div className={`${user === "doctor" ? "pt-60" : "pt-10"} pb-10`}>
      <form
        onSubmit={signupHandler}
        className="flex flex-col items-start *:mt-4 [&_input]:hover:shadow-md border border-gray-400 px-4 pb-4 rounded-xl hover:shadow-xl transition duration-20"
        action=""
      >
        <h2 className="mx-auto bg-purple-300 px-2  rounded-xl">
          {user} registration
        </h2>
        <div>
          <label htmlFor="fullName">Name: </label>
          <input
            className="border pl-1 rounded-md"
            type="text"
            id="fullName"
            name="name"
            placeholder="enter your full name"
          />
        </div>
        <div>
          <label htmlFor="username1">Username: </label>
          <input
            id="username1"
            className="border pl-1 rounded-md"
            type="text"
            name="username"
            placeholder="enter username"
          />
        </div>
        <div>
          <label htmlFor="DOB">DOB: </label>
          <input
            className="border rounded-md pl-1 text-gray-500 hover:cursor-pointer"
            type="date"
            id="DOB"
            name="DOB"
          />
        </div>
        <div>
          <label htmlFor="email1">E-Mail: </label>
          <input
            className="border pl-1 rounded-md"
            type="email"
            id="email1"
            placeholder="enter your gmail"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="contact">Contact: </label>
          <input
            id="contact"
            className="border pl-1 rounded-md"
            type="number"
            placeholder="enter contact"
            name="contact"
          />
        </div>
        <div>
          <label htmlFor="address1">Address: </label>
          <input
            id="address1"
            className="border pl-1 rounded-md w-100"
            type="text"
            placeholder="enter full address"
            name="address"
          />
        </div>
        {user === "patient" ? (
          <>
            <div>
              <label className="" htmlFor="verificationId">
                Senior Citizen/PWD Id:
              </label>
              <input
                className="border pl-1 rounded-md text-gray-500 hover:cursor-pointer"
                type="file"
                id="verificationId"
                name="verificationId"
              />
            </div>
            <div>
              <label htmlFor="reports">Medical Records(if any): </label>
              <input
                className="border pl-1 rounded-md text-gray-500 hover:cursor-pointer"
                type="file"
                id="reports"
                name="reports"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="degree">Medical Degree: </label>
              <input
                className="border pl-1 rounded-md"
                name="degree"
                type="text"
                id="degree"
                placeholder="enter qualification"
              />
            </div>
            <div>
              <label htmlFor="institute">University/ Institute: </label>
              <input
                className="border pl-1 rounded-md"
                name="institute"
                type="text"
                id="institute"
                placeholder="enter university name"
              />
            </div>
            <div>
              <label htmlFor="graduation">Graduation Year: </label>
              <input
                className="border pl-1 rounded-md hover:cursor-pointer text-gray-500"
                type="date"
                name="gradYear"
                id="graduation"
              />
            </div>
            <div>
              <label htmlFor="specialization">Specialization: </label>
              <input
                className="border pl-1 rounded-md"
                type="text"
                name="specialization"
                id="specialization"
                placeholder="enter specialization"
              />
            </div>
            <div>
              <label htmlFor="experience">Years Of Experience: </label>
              <input
                name="experience"
                className="border pl-1 rounded-md"
                type="number"
                id="experience"
              />
            </div>
            <div>
              <label htmlFor="medical-registration-number">
                Medical Registration Number:{" "}
              </label>
              <input
                name="medicalRegistrationNumber"
                className="border pl-1 rounded-md"
                type="number"
                id="medical-registration-number"
              />
            </div>
            <div>
              <label htmlFor="certificate">Registration Certificate: </label>
              <input
                className="border pl-1 rounded-md hover:cursor-pointer text-gray-500"
                type="file"
                name="registrationCertificate"
                id="certificate"
              />
            </div>
            <div>
              <label htmlFor="fee">Fee: </label>
              <input
                className="border pl-1 rounded-md hover:cursor-pointer text-gray-500"
                type="number"
                name="fee"
                id="fee"
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="password">Set Password: </label>
          <input
            className="border pl-1 rounded-md"
            type="password"
            id="password"
            placeholder="create new password"
            name="password"
          />
        </div>
        <div className="mx-auto">
          <button
            type="submit"
            className="bg-purple-300 px-2 rounded-2xl hover:cursor-pointer"
          >
            register
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupCard;
