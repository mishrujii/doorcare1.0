import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProfilePage() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "http://localhost:3000/api/auth/get-user-data"
      );
      console.log(response.data.user)
      setUser(response.data.user);
    }
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="border rounded-md p-4 w-fit mt-20 m-auto flex flex-col items-start">
        <img className="rounded-full m-auto" src={user.profilePicture} width="100" alt="" />
        <div><b>Name:</b> {user.name}</div>
        <div><b>Username:</b> {user.username}</div>
        <div><b>Role: </b> {user.role}</div>
        <div><b>Email:</b> {user.email}</div>
        <div><b>Contact:</b> {user.contact}</div>
        <div><b>DOB:</b> {user.DOB?.split("T")[0]}</div>
        <div><b>Address:</b> {user.address}</div>
        <div className="m-auto flex flex-col items-center ">
          <Link to='/edit-profile'>
          <button
            className="hover:cursor-pointer mt-2 rounded-xl px-2 bg-blue-400 m-auto"
          >
            edit profile
          </button>
          </Link>
          <Link to={'/edit-password'}>
          <button
            className="hover:cursor-pointer mt-2 rounded-xl px-2 bg-blue-400 m-auto"
          >
            edit password
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
