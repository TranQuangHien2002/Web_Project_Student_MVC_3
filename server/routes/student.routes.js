// server/routes/student.routes.js
const express = require("express");
const studentController = require("../controllers/student.controller");

const router = express.Router();

router.get("/:roomId", studentController.getByRoomId);
router.get("/", studentController.getAllStudents);
router.post("/create/:roomId", studentController.createStudentWithRoomId);
router.post("/create", studentController.createStudent);
router.put("/update/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
// lấy thông tin sinh viên theo id
router.get('/api/students/:id', studentController.getStudentById);

module.exports = router;