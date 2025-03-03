const express = require("express");
const {
  createHospital,
  getHospitalsByCity,
  updateHospital,
  deleteHospital,
  addHospitalDetails,
} = require("../../controller/hostpitalController");
const { authMiddleware, adminMiddleware } = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createHospital);
router.get("/", authMiddleware, getHospitalsByCity);
router.put("/update", authMiddleware, adminMiddleware, updateHospital);
router.delete("/delete", authMiddleware, adminMiddleware, deleteHospital);
router.post("/details", authMiddleware, addHospitalDetails);

module.exports = router;
