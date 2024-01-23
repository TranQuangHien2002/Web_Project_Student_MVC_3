// server/routes/student.routes.js
const express = require("express");
const roomController = require("../controllers/room.controller.js");

const router = express.Router();

router.get("/:userId", roomController.getByUserId);
router.get("/", roomController.getAllRoom);
router.post("/create/:userId", roomController.createRoomWithUserId);
router.post("/create", roomController.createRoom);
router.put("/update/:id", roomController.updateRoom);
router.delete("/:id", roomController.deleteRoom);
router.get("/room/:id_room", roomController.getRoomById); 

module.exports = router;

