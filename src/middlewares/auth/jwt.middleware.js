const jwt = require("jsonwebtoken");
const {
  auth: { jwtSecret },
} = require("../../config/keys");
const db = require("../../models");

const User = db.user;
const Role = db.role;

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401)
      .json({ message: "Unauthorized! The access token is expired!" });
  }
  return res.status(401).json({ message: "Unauthorized!" });
};

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided !" });
  }

  jwt.verify(token, jwtSecret, (err, decodedUser) => {
    if (err) {
      return res.status(401).json({ message: err });
    }
    req.userId = decodedUser.id;
    next();
  });
};

const isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          return res.status(500).json({ message: err });
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }
        res.status(403).json({ message: "Admin privilleges required !" });
        return;
      }
    );
  });
};

const isLibrarian = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).json({ message: err });
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "librarian") {
            next();
            return;
          }
        }
        res.status(403).json({ message: "Librarian privilleges required !" });
        return;
      }
    );
  });
};

module.exports = {
  verifyToken,
  isAdmin,
  isLibrarian,
};
