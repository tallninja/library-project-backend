const {
  auth: { user: User },
} = require("../../models");

const getUsers = (req, res) => {
  Users.find()
    .populate("roles")
    .exec((err, users) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: err });
      }
      res.status(200).json({ users });
    });
};

module.exports = getUsers;
