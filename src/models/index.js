const mongoose = require("mongoose");

const db = {
  mongoose: mongoose,
  role: require("./Role"),
  user: require("./User"),
  refreshToken: require("./RefreshToken"),
  ROLES: ["user", "admin", "librarian"],
};

module.exports = db;
