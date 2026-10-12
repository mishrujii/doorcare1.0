import { Link } from "react-router-dom"

function LoginCard({user}) {
  return (
    <div>
        <form className="flex flex-col items-center border border-gray-300 shadow-xl p-4 rounded-xl" action="">
            <h2 className="border bg-purple-400 px-3 rounded-xl mb-2">{user} login</h2>
            <input className="border mt-2 w-60 pl-2 rounded-md" type="text" placeholder="enter username"/>
            <input className="border mt-2 w-60 pl-2 rounded-md" type="password" placeholder="enter password"/>
            <Link to={user==='patient'?'/patient-dashboard': (user==='doctor'?'/doctor-dashboard':'/admin-dashboard')}>
              <button className="border mt-2 px-2  rounded-2xl bg-pink-400 hover:cursor-pointer" type="submit">login</button>
            </Link>
            {user!=='admin' &&  (
              <Link to={user==='patient'?'/patient-signup':'/doctor-signup'} >
              <button className="mt-2 text-xs text-blue-700 hover:cursor-pointer">new here? sign up!</button>
             </Link>
            )}
        </form>
    </div>
  )
}

export default LoginCard