import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditHospital.css"; 

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EditHospital = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const hospitalData = location.state || {};

  const [hospital, setHospital] = useState(hospitalData);

  useEffect(() => {
    if (!hospitalData.name) {
      fetchHospitalDetails();
    }
  }, []);

  const fetchHospitalDetails = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/hospitals/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setHospital(res.data);
    } catch (error) {
      console.error("Error fetching hospital details", error);
      alert("Failed to load hospital details.");
    }
  };

  const handleChange = (e) => {
    setHospital({ ...hospital, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/hospitals/update?id=${hospital._id}`, hospital, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Hospital updated successfully!");
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error updating hospital", error);
      alert("Failed to update hospital.");
    }
  };

  return (
    <div className="edit-hospital-container">
      <h2>Edit Hospital</h2>
      <form className="edit-hospital-form" onSubmit={handleUpdate}>
        <label htmlFor="name">Hospital Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter hospital name" value={hospital.name || ""} onChange={handleChange} required />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" placeholder="Enter city" value={hospital.city || ""} onChange={handleChange} required />

        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL" value={hospital.imageUrl || ""} onChange={handleChange} />

        <label htmlFor="specialities">Specialities:</label>
        <input type="text" id="specialities" name="specialities" placeholder="Enter specialities (comma-separated)" value={hospital.specialities || ""} onChange={handleChange} required />

        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" placeholder="Enter rating (out of 5)" value={hospital.rating || ""} onChange={handleChange} />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" placeholder="Enter hospital description" value={hospital.description || ""} onChange={handleChange} />

        <label htmlFor="numberOfDoctors">Number of Doctors:</label>
        <input type="number" id="numberOfDoctors" name="numberOfDoctors" placeholder="Enter number of doctors" value={hospital.numberOfDoctors || ""} onChange={handleChange} />

        <label htmlFor="numberOfDepartments">Number of Departments:</label>
        <input type="number" id="numberOfDepartments" name="numberOfDepartments" placeholder="Enter number of departments" value={hospital.numberOfDepartments || ""} onChange={handleChange} />

        <button type="submit">Update Hospital</button>
      </form>
    </div>
  );
};

export default EditHospital;
