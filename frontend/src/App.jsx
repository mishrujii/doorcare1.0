import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import ProfilePage from "./profilepage/ProfilePage"
import PatientAppointmentsPage from "./dashboardpage/patientdashboardpage/PatientAppointmentsPage";
import EditProfilePage from "./profilepage/EditProfilePage";
import EditPasswordPage from "./profilepage/EditPasswordPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/patient-login"
          element={<PatientLoginPage setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/doctor-login"
          element={<DoctorLoginPage setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/admin-login"
          element={<AdminLoginPage setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/patient/signup"
          element={<PatientSignup setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/doctor-signup"
          element={<DoctorSignup setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/patient-dashboard"
          element={<PatientDashBoardPage loggedIn={loggedIn} />}
        />
        <Route
          path="/doctor-description/:doctorId"
          element={<DoctorDescriptionPage loggedIn={loggedIn} />}
        />
        <Route
          path="/doctor-dashboard"
          element={<DoctorDashboardPage loggedIn={loggedIn} />}
        />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboardPage loggedIn={loggedIn} />}
        />
        <Route
          path="/doctor-registration"
          element={<DoctorRegistrationPage />}
        />
        <Route path="/registered-doctors" element={<RegisteredDoctorsPage />} />
        <Route
          path="/registered-patients"
          element={<RegisteredPatientsPage />}
        />
        <Route
          path="/profile-page"
          element={<ProfilePage loggedIn={loggedIn} />}
        />
        <Route
          path="/patient-appointments"
          element={<PatientAppointmentsPage loggedIn={loggedIn} />}
        />
        <Route path="/edit-profile" element={<EditProfilePage loggedIn={loggedIn}/>}/>
        <Route path="/edit-password" element={<EditPasswordPage loggedIn={loggedIn}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
