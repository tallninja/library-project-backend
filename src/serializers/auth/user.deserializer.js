module.exports = (User, passport) => {
  passport.deserializeUser((id, done) => {
    User.findById(id, { password: 0 })
      .populate("roles")
      .then((user) => {
        done(null, user);
      });
  });
};
