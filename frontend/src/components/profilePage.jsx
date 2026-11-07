import { useState } from "react";
import Navbar from "./Navbar";

function ProfilePage({ loggedIn }) {
  const [isEditOn, setIsEditOn] = useState(false);
  const [isPassChangeOn, setIsPassChangeOn] = useState(false);

  return (
    <>
      <Navbar loggedIn={loggedIn} />
      {isEditOn ? (
        <div className="w-fit m-auto">
          <form
            onSubmit={() => setIsEditOn(false)}
            className="[&_input]:border [&_input]:rounded-md [&_input]:mt-4  border rounded-md p-4 w-fit mt-20 m-auto flex flex-col items-start"
            action=""
          >
            <div>
              <label htmlFor="dp">Profile Pic: </label>
              <input id="dp" name="profilePicture" type="file" />
            </div>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" name="username" />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="contact">Contact: </label>
              <input type="number" id="contact" name="contact" />
            </div>
            <div>
              <label htmlFor="DOB">DOB: </label>
              <input type="date" id="DOB" name="DOB" />
            </div>
            <div>
              <label htmlFor="address">Address: </label>
              <input type="text" id="address" name="address" />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-xl px-2 bg-blue-400 m-auto"
            >
              save changes
            </button>
          </form>
        </div>
      ) : isPassChangeOn ? (
        <div className="w-fit m-auto mt-20">
          <form
            onSubmit={() => setIsPassChangeOn(false)}
            className="[&_input]:border [&_input]:rounded-md [&_input]:mt-4 border rounded-md p-4 w-fit flex flex-col items-start"
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
              className="mt-2 rounded-xl px-2 bg-blue-400 m-auto"
              type="submit"
            >
              set new password
            </button>
          </form>
        </div>
      ) : (
        <div className="border rounded-md p-4 w-fit mt-20 m-auto flex flex-col items-start">
          <img
            className="rounded-full m-auto"
            src="dp.png"
            width="100"
            alt=""
          />
          <div>Name: </div>
          <div>Username: </div>
          <div>Email: </div>
          <div>Contact: </div>
          <div>DOB: </div>
          <div>Address: </div>
          <button
            onClick={() => setIsEditOn(true)}
            className="mt-2 rounded-xl px-2 bg-blue-400 m-auto"
          >
            edit profile
          </button>
          <button
            onClick={() => setIsPassChangeOn(true)}
            className="mt-2 rounded-xl px-2 bg-blue-400 m-auto"
          >
            edit password
          </button>
        </div>
      )}
    </>
  );
}

export default ProfilePage;
