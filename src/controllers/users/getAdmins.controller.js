const {
  auth: { user: User, role: Role },
} = require("../../models");

const getAdmins = (req, res) => {
  Role.find({
    name: "admin",
  }).exex((err, role) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    User.find({
      roles: role._id,
    }).exec((err, users) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      return res.status(500).json({ users });
    });
  });
};

module.exports = getAdmins;
