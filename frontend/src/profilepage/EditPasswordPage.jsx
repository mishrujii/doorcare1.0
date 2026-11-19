import Navbar from "../components/Navbar";

function EditPasswordPage({ loggedIn }) {
  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <div className="w-fit m-auto mt-20">
        <form
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
