const db = require("../../models");
const User = db.user;
const Role = db.role;

let bcrypt = require("bcrypt");

const signup = (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, password, roles } =
    req.body;

  const user = new User({
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password: bcrypt.hashSync(password, 8),
  });

  user.save((err, user) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    if (roles) {
      Role.find(
        {
          name: { $in: roles },
        },
        (err, roles) => {
          if (err) {
            return res.status(500).json({ message: err });
          }
          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              return res.status(500).json({ message: err });
            }
            res.status(200).json({ message: "User created succesfully !" });
          });
        }
      );
    } else {
      Role.findOne({
        name: "user",
      }).exec((err, role) => {
        if (err) {
          res.status(500).json({ message: err });
        }
        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            return res.status(500).json({ message: err });
          }
          res.status(200).json({ message: "User created successfully !" });
        });
      });
    }
  });
};

module.exports = signup;
