import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddHospital.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AddHospital = () => {
  const [hospital, setHospital] = useState({
    name: "",
    city: "",
    imageUrl: "",
    specialities: "",
    rating: "",
    description: "",
    numberOfDoctors: "",
    numberOfDepartments: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setHospital({ ...hospital, [e.target.name]: e.target.value });
  };

  // Add a new hospital
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/hospitals/create`, hospital, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      alert("Hospital added successfully!");
      navigate("/admin-dashboard"); // Redirect to admin dashboard after adding
    } catch (error) {
      console.error("Error adding hospital", error);
      alert("Failed to add hospital.");
    }
  };

  return (
    <div className="add-hospital-container">
      <h2>Add Hospital</h2>
      <form className="add-hospital-form" onSubmit={handleSubmit}>
        <label>Hospital Name:</label>
        <input type="text" name="name" placeholder="Enter hospital name" value={hospital.name} onChange={handleChange} required />

        <label>City:</label>
        <input type="text" name="city" placeholder="Enter city" value={hospital.city} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="imageUrl" placeholder="Enter image URL" value={hospital.imageUrl} onChange={handleChange} />

        <label>Specialities (comma-separated):</label>
        <input type="text" name="specialities" placeholder="e.g. Cardiology, Neurology" value={hospital.specialities} onChange={handleChange} required />

        <label>Rating:</label>
        <input type="number" name="rating" placeholder="Enter rating (1-5)" value={hospital.rating} onChange={handleChange} />

        <label>Description:</label>
        <input type="text" name="description" placeholder="Enter description" value={hospital.description} onChange={handleChange} />

        <label>Number of Doctors:</label>
        <input type="number" name="numberOfDoctors" placeholder="Enter number of doctors" value={hospital.numberOfDoctors} onChange={handleChange} />

        <label>Number of Departments:</label>
        <input type="number" name="numberOfDepartments" placeholder="Enter number of departments" value={hospital.numberOfDepartments} onChange={handleChange} />

        <button type="submit">Add Hospital</button>
      </form>
    </div>
  );
};

export default AddHospital;
