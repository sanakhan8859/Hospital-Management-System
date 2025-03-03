const express = require("express");
const hospitalRoutes = require("./hospitalRoutes");
const authRoutes = require("./authRoutes");

const v1Router = express.Router();

v1Router.use("/hospitals", hospitalRoutes);
v1Router.use("/auth", authRoutes);

module.exports = v1Router;
