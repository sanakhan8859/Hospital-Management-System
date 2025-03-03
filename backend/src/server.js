const express = require("express");
require("dotenv").config();
require("./db/connection");
const v1Router = require("./routes/v1/v1Router");
const cors = require("cors");

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env[`${NODE_ENV}_PORT`]  || 4000 ;

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/v1", v1Router);

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
