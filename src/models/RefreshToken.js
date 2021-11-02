const mongoose = require("mongoose");
const { v4: uuid4 } = require("uuid");

const {
  auth: { jwtExpiration },
} = require("../config/keys");

const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  expiryDate: Date,
});

RefreshTokenSchema.statics.createToken = async function (user) {
  let expiredAt = new Date();
  expiredAt.getSeconds(expiredAt.getSeconds() + jwtExpiration);

  let _token = uuid4();

  let _object = new this({
    token: _token,
    user: user,
    expiryDate: expiredAt.getTime(),
  });

  console.log(_object);

  let refreshToken = await _object.save();

  return refreshToken.token;
};

RefreshTokenSchema.statics.verifyExpiration = (token) => {
  return token.expiryDate.getTime() > new Date().getTime();
};

module.exports = mongoose.model("refresh-tokens", RefreshTokenSchema);
