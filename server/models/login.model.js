// server/models/User.js
const db = require("../config/config");

class User {
  static createUser(name, email, password, callback) {
    const sqlInsert = "INSERT INTO user (name, email, password) VALUES (?)";
    const values = [name, email, password];
    db.query(sqlInsert, [values], callback);
  }

  static findUserByEmailAndPassword(email, password, callback) {
    const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    db.query(sql, [email, password], callback);
  }
}

module.exports = User;