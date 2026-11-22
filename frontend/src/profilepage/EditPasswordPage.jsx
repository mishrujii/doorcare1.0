import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function EditPasswordPage({ loggedIn }) {
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    if(e.target.oldPassword.value == e.target.newPassword.value){
      alert("password cannot be same!")
      return;
    }
    try{
      const response = await axios.post(
        "http://localhost:3000/api/auth/update-user-password",
        {
          oldPassword: e.target.oldPassword.value,
          newPassword: e.target.newPassword.value
        }
      )
      console.log(response.data)
      if(response.data.success){
        alert("password changed successfully!")
        navigate('/profile-page')
      }
      else{
        alert("incorrect password! try again.")
      }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <div className="w-fit m-auto mt-20">
        <form
          onSubmit={handleSubmit}
          className="[&_input]:border [&_input]:rounded-md [&_input]:mt-4 [&_input]:pl-1 border rounded-md p-4 w-fit flex flex-col items-start"
          action=""
        >
          <div>
            <label htmlFor="oldPassword">Enter Old Password: </label>
            <input type="password" id="oldPassword" name="oldPassword" />
          </div>
          <div>
            <label htmlFor="newPassword">Enter New Password: </label>
            <input type="password" id="newPassword" name="newPassword" />
          </div>
          <button
            className="hover:cursor-pointer mt-2 rounded-xl px-2 bg-blue-400 m-auto"
            type="submit"
          >
            set new password
          </button>
        </form>
      </div>
    </>
  );
}

export default EditPasswordPage;
