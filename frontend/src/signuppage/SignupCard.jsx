import axios from 'axios';

function SignupCard({ user }) {

async function signupHandler(e){
    e.preventDefault();
    const formData = new FormData(e.target)
    console.log(formData)
    console.log("form data recieved")
    try {
            const response = await axios.post(
                "http://localhost:3000/api/patient/signup",
                formData
            );
            for (const [key, value] of formData.entries()) {
            console.log(key, value);
            }
            console.log(response.data);
            alert("Signup successful!");
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert(error.response?.data?.message || "Signup failed!");
        }
  }
  
 
  return (
    <div>
      <form
        onSubmit={signupHandler}
        className="flex flex-col items-start *:mt-4 [&_input]:hover:shadow-md border border-gray-400 px-4 pb-4 rounded-xl hover:shadow-xl transition duration-200"
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
                name= "verificationId"
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
        ) : null}

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
              {user ===     "doctor" ? "next" : "register"}
            </button>
        </div>
      </form>
    </div>
  );
}

export default SignupCard;
