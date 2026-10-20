import Navbar from "../components/Navbar";

function DoctorDashboardPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-14 flex *:ml-4">
        <div>
          <p className="mx-auto bg-red-300 px-2 rounded-md mb-4 w-fit">
            today's schedule
          </p>
          <table className="border *:border [&_th]:border [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:px-2 [&_td]:py-1 **:text-center">
            <tr>
              <th>SNo</th>
              <th>Time</th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Issue</th>
              <th>Approve</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>10:00</td>
              <td>Aman kr. Mishra</td>
              <td>Mundeshwari Colony, Bhitti, Ramnagar, Varanasi</td>
              <td>+91-9125513261</td>
              <td>
                <button className="border text-sm bg-slate-200 hover:cursor-pointer px-1">
                  view
                </button>
              </td>
              <td>
                <div className="flex text-xs">
                  <button className="bg-green-400 px-1 rounded-md">
                    accept
                  </button>
                  <button className="ml-2 bg-red-400 px-1 rounded-md">
                    reject
                  </button>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <label htmlFor="done">pending</label>
                  <input className="mt-1 ml-1" type="checkbox" id="done" />
                </div>
              </td>
            </tr>
          </table>
        </div>
        {/* <div>past records</div> */}
      </div>
    </div>
  );
}

export default DoctorDashboardPage;
