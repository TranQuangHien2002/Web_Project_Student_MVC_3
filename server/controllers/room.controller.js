const Room = require("../models/room.model.js");

const handleResponse = (err, data, res, errorMessage) => {
    if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({ message: errorMessage.notFound });
        } else {
            res.status(500).send({ message: errorMessage.default });
        }
    } else {
        res.send(data);
    }
};

exports.getAllRoom = (req, res) => {
    Room.getAll((err, data) => {
        handleResponse(err, data, res, { default: "Some error occurred while retrieving rooms." });
    });
};

exports.createRoom = (req, res) => {
    const room = new Room(req.body);

    Room.create(room, (err, data) => {
        handleResponse(err, data, res, { default: "Some error occurred while creating the Room." });
    });
};

exports.updateRoom = (req, res) => {
    const id_room = req.params.id;

    Room.updateById(id_room, new Room(req.body), (err, data) => {
        handleResponse(err, data, res, { 
            notFound: `Not found Room with id_room ${id_room}.`, 
            default: `Error updating Room with id_room ${id_room}` 
        });
    });
};

exports.deleteRoom = (req, res) => {
    const id_room = req.params.id;

    Room.remove(id_room, (err, data) => {
        handleResponse(err, data, res, { 
            notFound: `Not found Room with id_room ${id_room}.`, 
            default: `Could not delete Room with id_room ${id_room}` 
        });
    });
};

exports.getByUserId = (req, res) => {
    Room.getByUserId(req.params.userId, (err, data) => {
        handleResponse(err, data, res, { 
            notFound: `Not found Room with id ${req.params.userId}.`, 
            default: `Error retrieving Room with id ${req.params.userId}` 
        });
    });
};

exports.createRoomWithUserId = (req, res) => {
    const room = new Room(req.body);

    Room.createWithUserId(room, req.params.userId, (err, data) => {
        handleResponse(err, data, res, { default: "Some error occurred while creating the Room." });
    });
};

exports.getRoomById = (req, res) => {
    const id_room = req.params.id;

    Room.findById(id_room, (err, data) => {
        handleResponse(err, data, res, { 
            notFound: `Not found Room with id_room ${id_room}.`, 
            default: `Error retrieving Room with id_room ${id_room}` 
        });
    });
};

module.exports = exports;