// server/models/student.model.js
const sql = require("../config/config.js");

const Student = function(student) {
    this.name = student.name;
    this.email = student.email;
    this.classname = student.classname;
};

const executeQuery = (query, params, result) => {
    sql.query(query, params, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("students: ", res);
        result(null, res);
    });
};

Student.getAll = result => {
    executeQuery("SELECT * FROM student ", [], result);
};

Student.create = (newStudent, result) => {
    executeQuery("INSERT INTO student SET ?", newStudent, result);
};

Student.updateById = (id_student, student, result) => {
    executeQuery(
        "UPDATE student SET name = ?, email = ?, classname = ? WHERE id_student = ?",
        [student.name, student.email, student.classname, id_student],
        result
    );
};

Student.remove = (id_student, result) => {
    executeQuery("DELETE FROM student WHERE id_student = ?", id_student, result);
};

Student.getByRoomId = (roomId, result) => {
    executeQuery("SELECT * FROM student WHERE id = ?", [roomId], result);
};

Student.createWithRoomId = (newStudent, roomId, result) => {
    newStudent.ID = parseInt(roomId);
    executeQuery("INSERT INTO student SET ?", newStudent, result);
};

module.exports = Student;