import Navbar from "../components/Navbar";

function EditProfilePage({ loggedIn }) {
  const user = [];
  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <div className="w-fit m-auto">
        <form
          className="[&_input]:border [&_input]:rounded-md [&_input]:mt-4  border rounded-md p-4 w-fit mt-20 m-auto flex flex-col items-start"
          action=""
        >
          <div>
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
            <input defaultValue={user.DOB} type="date" id="DOB" name="DOB" />
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
