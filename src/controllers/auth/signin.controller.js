const {
  auth: { jwtSecret },
} = require("../../config/keys");
const db = require("../../models");
const { user: User, refreshToken: RefreshToken } = db;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

const signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    email: email,
  })
    .populate("roles", "-__v")
    .exec(async (err, user) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      if (!user) {
        return res
          .status(404)
          .json({ message: "Incorrect email or password !" });
      }

      let passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res
          .status(401)
          .json({ message: "Incorrect email or password !" });
      }

      let token = jwt.sign({ id: user._id }, jwtSecret, {
        expiresIn: 60 * 60 * 24, // 24 hours
      });

      let refreshToken = await RefreshToken.createToken(user);

      let authorities = [];
      for (let i = 0; i < user.roles.length; i++) {
        authorities.push(`ROLE_${user.roles[i].name.toUpperCase()}`);
      }

      res.status(200).json({
        id: user._id,
        email: user.email,
        roles: authorities,
        accessToken: token,
        refreshToken: refreshToken,
      });
    });
};

module.exports = signin;
