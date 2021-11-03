const signout = (req, res, next) => {
  try {
    req.logout();
    return res.status(200).json({ message: "You are now loged out!" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = signout;
