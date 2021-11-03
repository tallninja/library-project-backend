module.exports = (User, passport) => {
  passport.deserializeUser((id, done) => {
    User.findById(id, { password: 0 }).then((user) => {
      done(null, user);
    });
  });
};
