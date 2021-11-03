const passport = require("passport");
const { user: User } = require("../../models");
const userSerializer = require("./user.serializer");
const userDeserializer = require("./user.deserializer");

module.exports = () => {
  userSerializer(passport);
  userDeserializer(User, passport);
};
