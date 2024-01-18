// server/controllers/login.controller.js
const User = require("../models/login.model");

exports.signup = (req, res) => {
  User.createUser(req.body.name, req.body.email, req.body.password, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
};

exports.login = (req, res) => {
  User.findUserByEmailAndPassword(req.body.email, req.body.password, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
};