const mongoose = require("mongoose");

const db = {
  mongoose: mongoose,
  auth: {
    role: require("./Role"),
    user: require("./User"),
    ROLES: ["user", "admin", "librarian"],
  },
  book: require("./Book"),
};

module.exports = db;
