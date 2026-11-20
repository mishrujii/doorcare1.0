import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ loggedIn, setLoggedIn }) {
  const [loginOptions, setLoginOptions] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const profileHandle
  return (
    <div className="bg-blue-400 flex justify-between px-4 py-2 items-center fixed w-full top-0">
      <Link
        to="/"
        onClick={() => {
          setLoggedIn(false);
        }}
      >
        <span>DOORCARE</span>
      </Link>
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
