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
Room.remove = (id_room, result) => {
    sql.query("DELETE FROM room WHERE id_room = ?", id_room, (err, res) => {
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

        console.log("deleted room with id_room: ", id_room);
        result(null, res);
    });
}
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
module.exports = Room;

