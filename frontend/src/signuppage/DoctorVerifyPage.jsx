function DoctorVerifyPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="border-gray-400 hover:shadow-xl transition duration-200 border rounded-xl px-4 pb-4 flex flex-col items-start  [&_input]:border [&_input]:rounded-md [&_input]:pl-2 [&_input]:hover:shadow-md *:mt-4"
        action=""
      >
        <h2 className=" mx-auto px-2 rounded-xl bg-purple-300">
          Professional Verification
        </h2>
        <div>
          <label htmlFor="degree">Medical Degree: </label>
          <input type="text" id="degree" placeholder="enter qualification" />
        </div>
        <div>
          <label htmlFor="institute">University/ Institute: </label>
          <input
            type="text"
            id="institute"
            placeholder="enter university name"
          />
        </div>
        <div>
          <label htmlFor="graduation">Graduation Year: </label>
          <input
            className="hover:cursor-pointer text-gray-500"
            type="date"
            id="graduation"
          />
        </div>
        <div>
          <label htmlFor="specialization">Specialization: </label>
          <input
            type="text"
            id="specialization"
            placeholder="enter specialization"
          />
        </div>
        <div>
          <label htmlFor="experience">Years Of Experience: </label>
          <input type="number" id="experience" />
        </div>
        <div>
          <label htmlFor="medical-registration-number">
            Medical Registration Number:{" "}
          </label>
          <input type="number" id="medical-registration-number" />
        </div>
        <div>
          <label htmlFor="certificate">Registration Certificate: </label>
          <input
            className="hover:cursor-pointer text-gray-500"
            type="file"
            id="certificate"
          />
        </div>
        <button
          className="mx-auto bg-yellow-300 px-2 rounded-xl hover:cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DoctorVerifyPage;
