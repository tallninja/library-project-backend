module.exports = {
  signup: require("./signup.middleware"),
  isUser: require("./user.middleware"),
  isLibrarian: require("./librarian.middleware"),
  isAdmin: require("./admin.middleware"),
};
