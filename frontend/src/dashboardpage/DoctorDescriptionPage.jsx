import Navbar from "../components/Navbar";

function DoctorDescriptionPage() {
  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <div>
      <Navbar />
      <div className="mt-16 ml-10 flex">
        <div className="p-4 rounded-xl border-gray-400 flex border w-fit">
          <img
            className="rounded-sm object-cover"
            src="coma-dp.jpg"
            width="170"
            alt=""
          />
          <div className="ml-5 *:mt-2 text-md">
            <p>Name: Comatozze</p>
            <h2>Specialization: Gynecologist</h2>
            <h2>Experience: 5 Years</h2>
            <h2>Mecial Degree: </h2>
            <h2>University/ Institue: </h2>
            <h2>Fee: ₹70000/-</h2>
          </div>
        </div>
        <div className="ml-10 border rounded-xl border-gray-400 px-4 flex flex-col">
          <h1 className="text-md mx-auto mb-4 px-2 mt-2 rounded-md bg-purple-300">
            Appointment Form
          </h1>
          <form
            className="[&_input]:border [&_input]:rounded-md [&_div]:mb-4 text-sm"
            action=""
          >
            <div>
              <label htmlFor="date">Date: </label>
              <input type="date" id="date" />
            </div>
            <div>
              <label htmlFor="time">Time: </label>
              <input type="time" id="time" />
            </div>
            <div className="flex item-start">
              <label htmlFor="symptom">Symptoms: </label>
              <textarea
                onInput={handleInput}
                className="ml-2 p-1 border rounded-md w-60 text-xs overflow-hidden"
                name=""
                id="symptom"
                placeholder="describe your health issue"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="px-2 rounded-xl bg-yellow-300 hover:cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="ml-10 mt-8 pb-2">
        <p className="border-b">Reviews</p>
        <div className="text-sm border-b flex items-center mt-2 pb-4">
          <img src="dp.png" width="30" className="rounded-full" alt="" />
          <div className="flex flex-col ml-2">
            <div className="flex items-center">
              <p className=" text-xs">
                aman-kr-mishra <span className="text-xs">(1 year ago)</span>
              </p>
              <img src="#" alt="" />
              <p className="ml-2">4.5/5</p>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDescriptionPage;
