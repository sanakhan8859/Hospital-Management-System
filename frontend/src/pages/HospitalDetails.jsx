import { useLocation, useNavigate } from "react-router-dom";
import "./HospitalDetails.css"; 

const HospitalDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hospital = location.state;

  if (!hospital) return <p className="no-details">No details available.</p>;

  return (
    <div className="hospital-details">
      <h1 className="hospital-name">{hospital.name}</h1>
      
   
      <img src={hospital.imageUrl || "https://via.placeholder.com/300"} alt={hospital.name} className="main-image" />
      
      <p className="info"><strong>City:</strong> <span className="bold">{hospital.city}</span></p>
      <p className="info"><strong>Specialities:</strong> <span className="bold">{hospital.specialities.length > 0 ? hospital.specialities.join(", ") : "N/A"}</span></p>
      <p className="info"><strong>Rating:</strong> <span className="bold">{hospital.rating || "No rating available"}</span></p>
     
      <p className="info"><strong>Description:</strong> <span className="bold">{hospital.description || "No description provided."}</span></p>

     
      {hospital.images && hospital.images.length > 0 && (
        <div className="hospital-images">
          <h2>Gallery</h2>
          <div className="image-grid">
            {hospital.images.map((img, index) => (
              <img key={index} src={img} alt={`Hospital ${index + 1}`} className="gallery-image" />
            ))}
          </div>
        </div>
      )}

      <p className="info"><strong>Number of Doctors:</strong> <span className="bold">{hospital.numberOfDoctors || "Not specified"}</span></p>
      <p className="info"><strong>Number of Departments:</strong> <span className="bold">{hospital.numberOfDepartments || "Not specified"}</span></p>

     
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default HospitalDetails;
