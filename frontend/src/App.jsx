import { Routes, Route, Navigate } from "react-router-dom"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import AddHospital from "./pages/AddHospital";
import EditHospital from "./pages/EditHospital";
import HospitalDetails from "./pages/HospitalDetails";
import UserHospitalDetails from "./pages/UserHospitalDetails.jsx"; 

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) return <Navigate to="/" />;
  if (role && userRole !== role) return <Navigate to="/" />;

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

     
      <Route path="/user-dashboard" element={<PrivateRoute role="user"><UserDashboard /></PrivateRoute>} />
      <Route path="/user-hospital-details" element={<PrivateRoute role="user"><UserHospitalDetails /></PrivateRoute>} />

      
      <Route path="/admin-dashboard" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />
      <Route path="/add-hospital" element={<PrivateRoute role="admin"><AddHospital /></PrivateRoute>} />
      <Route path="/edit-hospital/:id" element={<PrivateRoute role="admin"><EditHospital /></PrivateRoute>} />
      <Route path="/hospital-details/:id" element={<PrivateRoute role="admin"><HospitalDetails /></PrivateRoute>} /> 
    </Routes>
  );
}

export default App;
