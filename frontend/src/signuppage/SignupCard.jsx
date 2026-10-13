import { Link } from "react-router-dom";

function SignupCard({ user }) {
  return (
    <div>
      <form
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
            placeholder="enter your full name"
          />
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            className="border pl-1 rounded-md"
            type="text"
            placeholder="enter username"
          />
        </div>
        <div>
          <label htmlFor="DOB">DOB: </label>
          <input
            className="border rounded-md pl-1 text-gray-500 hover:cursor-pointer"
            type="date"
            id="DOB"
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail: </label>
          <input
            className="border pl-1 rounded-md"
            type="email"
            id="email"
            placeholder="enter your gmail"
          />
        </div>
        <div>
          <label htmlFor="contact">Contact: </label>
          <input
            className="border pl-1 rounded-md"
            type="number"
            placeholder="enter contact"
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            className="border pl-1 rounded-md w-100"
            type="text"
            placeholder="enter full address"
          />
        </div>
        {user === "patient" ? (
          <>
            <div>
              <label className="" htmlFor="verification">
                Senior Citizen/PWD Id:{" "}
              </label>
              <input
                className="border pl-1 rounded-md text-gray-500 hover:cursor-pointer"
                type="file"
                id="verification"
              />
            </div>
            <div>
              <label htmlFor="reports">Medical Records(if any): </label>
              <input
                className="border pl-1 rounded-md text-gray-500 hover:cursor-pointer"
                type="file"
                id="reports"
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
          />
        </div>
        <div className="mx-auto">
          <Link to={user === "doctor" ? "/doctor-verification-form" : '/'}>
            <button
              type="submit"
              className="bg-purple-300 px-2 rounded-2xl hover:cursor-pointer"
            >
              {user ===     "doctor" ? "next" : "register"}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupCard;
