const joi = require("joi");
const {
  auth: { user: User },
} = require("../../models");

const resetPassword = async (req, res) => {
  const { id } = req.query;
  const { password } = req.body;

  const schema = joi.object({
    id: joi.string().required(),
    password: joi.string().required(),
  });
  const { error } = schema.validate({ id, password });

  if (error) {
    return res.status(500).json({ message: error.details[0].message });
  }

  await User.findByIdAndUpdate(
    id,
    {
      password: password,
    },
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to change password !" });
      }
      res.status(200).json({ message: "Password changed successfully !" });
    }
  );
};

module.exports = resetPassword;
