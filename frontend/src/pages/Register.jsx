import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/Register.css"; 

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setFormData({ ...formData, role: formData.role === "user" ? "admin" : "user" });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/auth/register`, formData);
      navigate("/");
    } catch (error) {
      setError("Registration failed");
    }
  };

  return (
    <div className="container-registration">
      <div className="register-container">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

          {/* Role Toggle Switch */}
          <div className="toggle-switch">
            <label>User</label>
            <div onClick={handleToggle} className={formData.role === "admin" ? "active" : ""}></div>
            <label>Admin</label>
          </div>

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")} className="login-link">
            Go to Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
