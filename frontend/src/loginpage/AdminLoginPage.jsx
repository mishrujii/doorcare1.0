import LoginCard from "./LoginCard";

function AdminLoginPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginCard user="admin" />
    </div>
  );
}

export default AdminLoginPage;
