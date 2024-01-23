const sql = require("../config/config.js");


const Room = function(room) {
    this.name = room.name;
    this.infor = room.infor;
};

Room.getAll = result => {
    sql.query("SELECT * FROM room", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("classs: ", res);
        result(null, res);
    });
};

Room.create = (newRoom, result) => {
    sql.query("INSERT INTO room SET ?", newRoom, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            console.log("error: ", err);
            return;
        }

        console.log("created room: ", { id_room: res.insertId, ...newRoom });
        result(null, { id_room: res.insertId, ...newRoom });
    });
}

Room.updateById = (id_room, room, result) => {
    sql.query(
        "UPDATE room SET name = ?, infor = ? WHERE id_room = ?",
        [room.name, room.infor, id_room],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                console.log("error: ", err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                console.log("error: ", err);
                return;
            }
            console.log("updated room: ", { id_room: id_room, ...room });
            result(null, { id_room: id_room, ...room });
        }
    );
}
// TH1: NẾU MUỐN XÓA ROMM THÌ PHẢI XÓA HẾT SINH VIÊN TRONG ROOM ĐÓ TRƯỚC RỒI MỚI XÓA ROOM ĐÓ ĐƯỢC VÌ ROOM ĐÓ ĐANG CHỨA SINH VIÊN 
// Room.remove = (id_room, result) => {
//     sql.query("DELETE FROM room WHERE id_room = ?", id_room, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             console.log("error: ", err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             result({ kind: "not_found" }, null);
//             console.log("error: ", err);
//             return;
//         }

//         console.log("deleted room with id_room: ", id_room);
//         result(null, res);
//     });
// }

// TH2: XÓA LUÔN SINH VIÊN VÀ ROOM ĐÓ
Room.remove = (id_room, result) => {
    sql.query("DELETE FROM student WHERE id = ?", id_room, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        sql.query("DELETE FROM room WHERE id_room = ?", id_room, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("deleted room with id: ", id_room);
            result(null, res);
        });
    });
};
Room.getByUserId = (userId, result) => {
    sql.query("SELECT * FROM room WHERE id = ?", [userId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("rooms: ", res);
        result(null, res);
    });
};
Room.createWithUserId = (newRoom, userId, result) => {
    newRoom.ID = parseInt(userId);
    sql.query("INSERT INTO room SET ?", newRoom, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created room: ", { id_room: res.insertId, ...newRoom });
        result(null, { id_room: res.insertId, ...newRoom });
    });
};
Room.findById = (id_room, result) => {
    sql.query("SELECT * FROM room WHERE id_room = ?", [id_room], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log("found room: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};
module.exports = Room;

