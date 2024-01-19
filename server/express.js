// server/express.js
const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/student.routes");
const loginRoutes = require("./routes/login.routes");
const roomRoutes = require("./routes/room.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/logins", loginRoutes);
app.use("/api/rooms", roomRoutes);

module.exports = app;

