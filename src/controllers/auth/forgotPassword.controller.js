const joi = require("joi");
const {
  email: { BASE_URL },
} = require("../../config/keys");
const {
  auth: { user: User },
} = require("../../models");
const {
  email: { sendEmail },
} = require("../../services");

const forgotPassword = (req, res) => {
  const { email } = req.body;
  const schema = joi.object({ email: joi.string().email().required() });
  const { error } = schema.validate({ email });

  if (error) {
    res.status(500).json({ message: error.details[0].message });
  }

  User.findOne(
    {
      email: email,
    },
    (err, user) => {
      if (err) {
        return res.status(500).json({ message: "User does not exist !" });
      }
      const link = `${BASE_URL}/api/auth/reset-password?id=${user._id}`;
      sendEmail(user.email, "Password Reset", link, (err, info) => {
        if (err) {
          console.error("Failed to send email !", err);
          return res.status(500).json({ message: err });
        }
        console.log("Email sent successfully", info);
        res
          .status(200)
          .json({ message: `Password reset link sent to: ${user.email}` });
      });
    }
  );
};

module.exports = forgotPassword;
