import LoginCard from "./LoginCard";

function AdminLoginPage({setLoggedIn}) {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginCard user="admin" setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default AdminLoginPage;
