const sql = require("../config/config.js");

const Room = function(room) {
    this.name = room.name;
    this.infor = room.infor;
};

const executeQuery = (query, params, result) => {
    sql.query(query, params, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("classs: ", res);
        result(null, res);
    });
};

Room.getAll = result => {
    executeQuery("SELECT * FROM room", [], result);
};

Room.create = (newRoom, result) => {
    executeQuery("INSERT INTO room SET ?", newRoom, result);
};

Room.updateById = (id_room, room, result) => {
    executeQuery(
        "UPDATE room SET name = ?, infor = ? WHERE id_room = ?",
        [room.name, room.infor, id_room],
        result
    );
};

// TH1: Xóa lớp học trong TH phải xóa học sinh trước
// Room.remove = (id_room, result) => {
//     executeQuery("DELETE FROM room WHERE id_room = ?", [id_room], result);
// };

//TH2: Xóa cả lớp học và cả học sinh trong lớp đó
Room.remove = (id_room, result) => {
    executeQuery("DELETE FROM student WHERE id = ?", [id_room], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        executeQuery("DELETE FROM room WHERE id_room = ?", [id_room], result);
    });
};

Room.getByUserId = (userId, result) => {
    executeQuery("SELECT * FROM room WHERE id = ?", [userId], result);
};

Room.createWithUserId = (newRoom, userId, result) => {
    newRoom.ID = parseInt(userId);
    executeQuery("INSERT INTO room SET ?", newRoom, result);
};

Room.findById = (id_room, result) => {
    executeQuery("SELECT * FROM room WHERE id_room = ?", [id_room], result);
};

module.exports = Room;