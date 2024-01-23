// server/controllers/student.controller.js
const Student = require("../models/student.model");

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

exports.getAllStudents = (req, res) => {
    Student.getAll((err, data) => {
        handleResponse(err, data, res, { default: "Some error occurred while retrieving students." });
    });
};

exports.createStudent = (req, res) => {
    const student = new Student(req.body);

    Student.create(student, (err, data) => {
        handleResponse(err, data, res, { default: "Some error occurred while creating the Student." });
    });
};

exports.updateStudent = (req, res) => {
    const id_student = req.params.id;

    Student.updateById(id_student, new Student(req.body), (err, data) => {
        handleResponse(err, data, res, { 
            notFound: `Not found Student with id_student ${id_student}.`, 
            default: `Error updating Student with id_student ${id_student}` 
        });
    });
};

exports.deleteStudent = (req, res) => {
    const id_student = req.params.id;

    Student.remove(id_student, (err, data) => {
        handleResponse(err, data, res, { 
            notFound: `Not found Student with id_student ${id_student}.`, 
            default: `Could not delete Student with id_student ${id_student}` 
        });
    });
};

exports.getByRoomId = (req, res) => {
    Student.getByRoomId(req.params.roomId, (err, data) => {
        handleResponse(err, data, res, { 
            notFound: `Not found Student with id ${req.params.roomId}.`, 
            default: `Error retrieving Student with id ${req.params.roomId}` 
        });
    });
};

exports.createStudentWithRoomId = (req, res) => {
    const student = new Student(req.body);

    Student.createWithRoomId(student, req.params.roomId, (err, data) => {
        handleResponse(err, data, res, { default: "Some error occurred while creating the Student." });
    });
};

module.exports = exports;