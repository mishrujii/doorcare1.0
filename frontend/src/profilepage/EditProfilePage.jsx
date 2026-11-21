import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function EditProfilePage() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const data = new FormData(e.target)
    try{
      await axios.post(
        "http://localhost:3000/api/auth/update-user-data",
        data
      )
      alert("profile updated successfully!")
      console.log("profile updated successfully!")
      navigate("/profile-page")
    }catch(error){
      console.log(error)
    }
  }

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
      <div className="w-fit m-auto mb-10">
        <form
          onSubmit={handleSubmit}
          className="[&_input]:border [&_input]:rounded-md [&_input]:mt-4 [&_input]:pl-1  border rounded-md p-4 w-fit mt-20 m-auto flex flex-col items-start"
          action=""
        >
          <div>
            <img className="rounded-full m-auto" src={user.profilePicture} width="100" alt="" />
            <label htmlFor="dp">Profile Pic: </label>
            <input
              defaultValue={user.profilePicture}
              id="dp"
              name="profilePicture"
              type="file"
            />
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input defaultValue={user.name} type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              defaultValue={user.username}
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              defaultValue={user.email}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="contact">Contact: </label>
            <input
              defaultValue={user.contact}
              type="number"
              id="contact"
              name="contact"
            />
          </div>
          <div>
            <label htmlFor="DOB">DOB: </label>
            <input defaultValue={user.DOB?.split("T")[0]} type="date" id="DOB" name="DOB" />
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <input
              defaultValue={user.address}
              type="text"
              id="address"
              name="address"
            />
          </div>
          <button
            type="submit"
            className="hover:cursor-pointer mt-2 rounded-xl px-2 bg-blue-400 m-auto"
          >
            save changes
          </button>
        </form>
      </div>
    </>
  );
}

export default EditProfilePage;
