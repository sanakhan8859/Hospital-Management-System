import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserDashboard.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserDashboard = () => {
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const fetchHospitals = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/hospitals?city=${city.toLowerCase()}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (res.data.length === 0) {
        setHospitals([]);
        setError("No hospitals found!");
      } else {
        setHospitals(res.data);
        setError("");
      }
    } catch (err) {
      setError("Failed to fetch hospitals. Please try again later.");
      setHospitals([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHospitals();
  }, [city]);

  return (
    <div className="dashboard-container">
      <div className="user-top-bar">
        <h1>User Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <p className="welcome-message">
        <strong>Hospital Management Dashboard</strong> - Find the best hospitals in your city with ease!
      </p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search hospitals by city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
      </div>

      {hospitals.length > 0 && !loading && (
        <p className="total-count">Total Hospitals Found: <strong>{hospitals.length}</strong></p>
      )}

      {loading && <p className="loading-text">Loading hospitals...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="hospital-grid">
        {hospitals.length > 0 ? (
          hospitals.map((hospital) => (
            <div key={hospital._id} className="hospital-card">
              <img src={hospital.imageUrl || "https://via.placeholder.com/300"} alt={hospital.name} className="hospital-image" />
              <h3 className="hospital-name">{hospital.name}</h3>
              <p><strong>City:</strong> {hospital.city}</p>
              <p><strong>Specialities:</strong> {hospital.specialities.length > 0 ? hospital.specialities.join(", ") : "N/A"}</p>
              <p><strong>Rating:</strong> ⭐ {hospital.rating || "Not Rated"}</p>
              

              <button className="view-more-btn" onClick={() => navigate(`/user-hospital-details`, { state: hospital })}>
                View More
              </button>
            </div>
          ))
        ) : (
          !loading && <p className="no-hospitals-text">No hospitals found.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
