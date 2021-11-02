const jwt = require("jsonwebtoken");

const db = require("../../models");
const { refreshToken: RefreshToken } = db;
const {
  auth: { jwtSecret, jwtExpiration },
} = require("../../config/keys");

const refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (!requestToken) {
    return res.status(403).json({ message: "Refresh token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });

    if (!refreshToken) {
      return res.status(403).json({ message: "Refresh token does not exist!" });
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.findByIdAndRemove(refreshToken._id, {
        useFindAndModify: false,
      }).exec();
      return res
        .status(403)
        .json({ message: "Refresh token is expired! Please signin again" });
    }

    let newAccessToken = jwt.sign({ id: refreshToken.user._id }, jwtSecret, {
      expiresIn: jwtExpiration,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    // console.error(err);
    return res.status(500).json({ message: err });
  }
};

module.exports = refreshToken;
