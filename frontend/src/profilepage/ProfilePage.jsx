import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProfilePage({ loggedIn }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("");
      setUser(response.data);
    }
    getData();
  }, []);

  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <div className="border rounded-md p-4 w-fit mt-20 m-auto flex flex-col items-start">
        <img className="rounded-full m-auto" src={user.profilePicture} width="100" alt="" />
        <div>Name: {user.name}</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Contact: {user.contact}</div>
        <div>DOB: {user.DOB}</div>
        <div>Address: {user.address}</div>
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
    </>
  );
}

export default ProfilePage;
