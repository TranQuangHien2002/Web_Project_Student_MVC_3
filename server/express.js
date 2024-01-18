// server/express.js
const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/student.routes");
const loginRoutes = require("./routes/login.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", studentRoutes);
app.use("/api", loginRoutes);

module.exports = app;

