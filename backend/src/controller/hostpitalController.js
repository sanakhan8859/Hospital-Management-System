const Hospital = require("../models/hospital");

// Create a new hospital
exports.createHospital = async (req, res) => {
  try {
    const newHospital = new Hospital(req.body);
    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get hospitals by city (case-insensitive)
exports.getHospitalsByCity = async (req, res) => {
  try {
    const { city } = req.query;

    const query = city ? { city: { $regex: new RegExp(city, "i") } } : {};
    const hospitals = await Hospital.find(query);

    if (!hospitals.length) {
      return res.status(404).json({ error: "No hospitals found in this city." });
    }

    res.status(200).json(hospitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update hospital details
exports.updateHospital = async (req, res) => {
  try {
    const { id } = req.query;
    const updatedHospital = await Hospital.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedHospital) {
      return res.status(404).json({ error: "Hospital not found." });
    }

    res.status(200).json(updatedHospital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a hospital
exports.deleteHospital = async (req, res) => {
  try {
    const { id } = req.query;
    const hospital = await Hospital.findByIdAndDelete(id);

    if (!hospital) {
      return res.status(404).json({ error: "Hospital not found." });
    }

    res.status(200).json({ message: "Hospital deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add hospital details
exports.addHospitalDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const updatedHospital = await Hospital.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedHospital) {
      return res.status(404).json({ error: "Hospital not found." });
    }

    res.status(200).json(updatedHospital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
