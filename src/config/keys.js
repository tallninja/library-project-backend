const devKeys = require("./dev");
const prodKeys = require("./prod");

module.exports = process.env.NODE_ENV === "production" ? prodKeys : devKeys;
