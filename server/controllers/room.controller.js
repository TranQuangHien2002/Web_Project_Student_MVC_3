const Room = require("../models/room.model.js");
const Class = require("../models/room.model.js");

exports.getAllRoom = (req, res) => {
    Class.getAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving class." });
        else res.send(data);
    });
};
exports.createRoom = (req, res) => {
    const room = new Room({
        name: req.body.name,
        infor: req.body.infor
    });

    Room.create(room, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while creating the Room." });
        else res.send(data);
    });
}

exports.updateRoom = (req, res) => {
    const id_room = req.params.id;
    Room.updateById(id_room, new Room(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({ message: `Not found Room with id_room ${id_room}.` });
            else res.status(500).send({ message: "Error updating Room with id_room " + id_room });
        } else res.send(data);
    }
    );
};

exports.deleteRoom = (req, res) => {
    const id_room = req.params.id;

    Room.remove(id_room, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({ message: `Not found Room with id_room ${id_room}.` });
            else res.status(500).send({ message: "Could not delete Room with id_room " + id_room });
        } else res.send({ message: `Room was deleted successfully!` });
    });
}

exports.getByUserId = (req, res) => {
    Room.getByUserId(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Room with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Room with id " + req.params.userId
                });
            }
        } else res.send(data);
    });
};
exports.createRoomWithUserId = (req, res) => {
    const room = new Room({
        name: req.body.name,
        infor: req.body.infor,
    });

    Room.createWithUserId(room, req.params.userId, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while creating the Room." });
        else res.send(data);
    });
};
module.exports = exports;

