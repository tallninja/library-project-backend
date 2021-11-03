const mongoose = require("mongoose");

const db = {
  mongoose: mongoose,
  role: require("./Role"),
  user: require("./User"),
  ROLES: ["user", "admin", "librarian"],
};

module.exports = db;
