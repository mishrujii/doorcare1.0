import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [loginOptions, setLoginOptions] = useState(false);
  return (
    <div className="bg-yellow-800 flex justify-between px-4 py-2 items-center fixed w-full top-0">
      <Link to="/">
        <span>CHUTMASTER</span>
      </Link>
      <div
        onClick={() => setLoginOptions((prev) => !prev)}
        className="bg-purple-400 rounded-2xl px-2 py-1 hover:cursor-pointer relative"
      >
        login/signup
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
    </div>
  );
}

export default Navbar;
