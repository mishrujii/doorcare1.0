import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import PatientLoginPage from "./loginpage/PatientLoginPage";
import DoctorLoginPage from "./loginpage/DoctorLoginPage";
import AdminLoginPage from "./loginpage/AdminLoginPage";
import PatientSignup from "./signuppage/PatientSignup";
import DoctorSignup from "./signuppage/DoctorSignup";
import DoctorVerifyPage from "./signuppage/DoctorVerifyPage";
import PatientDashBoardPage from "./dashboardpage/PatientDashBoardPage";
import DoctorDescriptionPage from "./dashboardpage/DoctorDescriptionPage";
import DoctorDashboardPage from "./dashboardpage/DoctorDashboardPage";
import AdminDashboardPage from "./dashboardpage/AdminDashboardPage";
import DoctorRegistrationPage from "./dashboardpage/DoctorRegistrationPage";
import RegisteredDoctorsPage from "./dashboardpage/RegisteredDoctorsPage";
import RegisteredPatientsPage from "./dashboardpage/RegisteredPatientsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient-login" element={<PatientLoginPage />} />
        <Route path="/doctor-login" element={<DoctorLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/patient/signup" element={<PatientSignup />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        <Route path="/doctor-verification-form" element={<DoctorVerifyPage/>}/>
        <Route path="/patient-dashboard" element={<PatientDashBoardPage/>}/>
        <Route path="/doctor-description" element={<DoctorDescriptionPage/>}/>
        <Route path="/doctor-dashboard" element={<DoctorDashboardPage/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboardPage/>}/>
        <Route path="/doctor-registration" element={<DoctorRegistrationPage/>}/>
        <Route path="/registered-doctors" element={<RegisteredDoctorsPage/>}/>
        <Route path="/registered-patients" element={<RegisteredPatientsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
