import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import PatientLoginPage from "./loginpage/PatientLoginPage";
import DoctorLoginPage from "./loginpage/DoctorLoginPage";
import AdminLoginPage from "./loginpage/AdminLoginPage";
import PatientSignup from "./signuppage/PatientSignup";
import DoctorSignup from "./signuppage/DoctorSignup";
import DoctorDescriptionPage from "./dashboardpage/patientdashboardpage/DoctorDescriptionPage";
import DoctorDashboardPage from "./dashboardpage/DoctorDashboardPage";
import AdminDashboardPage from "./dashboardpage/admindashboardpage/AdminDashboardPage";
import DoctorRegistrationPage from "./dashboardpage/admindashboardpage/DoctorRegistrationPage";
import RegisteredDoctorsPage from "./dashboardpage/admindashboardpage/RegisteredDoctorsPage";
import RegisteredPatientsPage from "./dashboardpage/admindashboardpage/RegisteredPatientsPage";
import PatientDashBoardPage from "./dashboardpage/patientdashboardpage/PatientDashboardPage";
import ProfilePage from "./profilepage/ProfilePage";
import PatientAppointmentsPage from "./dashboardpage/patientdashboardpage/PatientAppointmentsPage";
import EditProfilePage from "./profilepage/EditProfilePage";
import EditPasswordPage from "./profilepage/EditPasswordPage";

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
        <Route path="/patient-dashboard" element={<PatientDashBoardPage />} />
        <Route
          path="/doctor-description/:doctorId"
          element={<DoctorDescriptionPage />}
        />
        <Route path="/doctor-dashboard" element={<DoctorDashboardPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route
          path="/doctor-registration"
          element={<DoctorRegistrationPage />}
        />
        <Route path="/registered-doctors" element={<RegisteredDoctorsPage />} />
        <Route
          path="/registered-patients"
          element={<RegisteredPatientsPage />}
        />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route
          path="/patient-appointments"
          element={<PatientAppointmentsPage />}
        />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/edit-password" element={<EditPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
