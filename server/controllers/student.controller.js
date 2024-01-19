// server/controllers/student.controller.js
const Student = require("../models/student.model");

exports.getAllStudents = (req, res) => {
    Student.getAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving students." });
        else res.send(data);
    });
};

exports.createStudent = (req, res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        classname: req.body.classname
    });

    Student.create(student, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while creating the Student." });
        else res.send(data);
    });
};

exports.updateStudent = (req, res) => {
    const id_student = req.params.id;

    Student.updateById(id_student, new Student(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({ message: `Not found Student with id_student ${id_student}.` });
            else res.status(500).send({ message: "Error updating Student with id_student " + id_student });
        } else res.send(data);
    });
};

exports.deleteStudent = (req, res) => {
    const id_student = req.params.id;

    Student.remove(id_student, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({ message: `Not found Student with id_student ${id_student}.` });
            else res.status(500).send({ message: "Could not delete Student with id_student " + id_student });
        } else res.send({ message: `Student was deleted successfully!` });
    });
};
exports.getByUserId = (req, res) => {
    Student.getByUserId(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Student with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Student with id " + req.params.userId
                });
            }
        } else res.send(data);
    });
};
module.exports = exports;