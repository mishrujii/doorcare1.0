import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [loginOptions, setLoginOptions] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);
  // const profileHandle
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout"
      );
      if (response.data.success) {
        setLoggedIn(false);
        console.log("logged out successfully!")
        console.log(response.data)
        navigate('/')
      } else {
        console.log("ERROR: logout failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/check-login",
        );
        console.log(response.data)
        if (response.data.success) {
          console.log("logged in set true")
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="bg-blue-400 flex justify-between px-4 py-2 items-center fixed w-full top-0">
      
      <img onClick={handleLogout} src="/doorcare-logo.png" width="100px" className="rounded-md hover:cursor-pointer" />
      {loggedIn ? (
        <Link to={"/profile-page"}>
          <div
            // onClick={profileHandler}
            className="bg-white rounded-2xl px-2 py-1 hover:cursor-pointer relative"
          >
            profile
          </div>
        </Link>
      ) : (
        <div
          onClick={() => setLoginOptions((prev) => !prev)}
          className="bg-white rounded-2xl px-2 py-1 hover:cursor-pointer relative"
        >
          login
          {loginOptions && (
            <div className="flex flex-col absolute top-9 -left-10 bg-white p-2 z-1 rounded-2xl">
              <Link to="/patient-login">
                <button className="border-b border-slate-500 px-2 pb-1 hover: cursor-pointer">
                  patient
                </button>
              </Link>
              <Link to="/doctor-login">
                <button className="border-b border-slate-500 px-2 pb-1 hover:cursor-pointer">
                  doctor
                </button>
              </Link>
              <Link to="/admin-login">
                <button className="hover:cursor-pointer px-2">admin</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
