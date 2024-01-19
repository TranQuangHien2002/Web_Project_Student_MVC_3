// server/routes/student.routes.js
const express = require("express");
const studentController = require("../controllers/student.controller");

const router = express.Router();

router.get("/:userId", studentController.getByUserId);
router.get("/", studentController.getAllStudents);
router.post("/create", studentController.createStudent);
router.put("/update/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;