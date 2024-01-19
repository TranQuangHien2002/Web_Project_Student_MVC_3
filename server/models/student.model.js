// server/models/student.model.js
const sql = require("../config/config.js");

const Student = function(student) {
    this.name = student.name;
    this.email = student.email;
    this.classname = student.classname;
};

Student.getAll = result => {
    sql.query("SELECT * FROM student ", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("students: ", res);
        result(null, res);
    });
};

Student.create = (newStudent, result) => {
    sql.query("INSERT INTO student SET ?", newStudent, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created student: ", { id_student: res.insertId, ...newStudent });
        result(null, { id_student: res.insertId, ...newStudent });
    });
};

Student.updateById = (id_student, student, result) => {
    sql.query(
        "UPDATE student SET name = ?, email = ?, classname = ? WHERE id_student = ?",
        [student.name, student.email, student.classname, id_student],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated student: ", { id_student: id_student, ...student });
            result(null, { id_student: id_student, ...student });
        }
    );
};

Student.remove = (id_student, result) => {
    sql.query("DELETE FROM student WHERE id_student = ?", id_student, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted student with id_student: ", id_student);
        result(null, res);
    });
};
Student.getByUserId = (userId, result) => {
    sql.query("SELECT * FROM student WHERE id = ?", [userId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("students: ", res);
        result(null, res);
    });
};
Student.createWithUserId = (newStudent, userId, result) => {
    newStudent.ID = parseInt(userId);
    sql.query("INSERT INTO student SET ?", newStudent, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created student: ", { id_student: res.insertId, ...newStudent });
        result(null, { id_student: res.insertId, ...newStudent });
    });
};
module.exports = Student;
