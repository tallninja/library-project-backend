module.exports = {
  mongo: {
    URI: process.env.MONGO_URI,
  },
  auth: {
    jwtSecret: process.env.AUTH_SECRET,
    jwtExpiration: 60 * 60, // 1 hour
    jwtRefreshExpiration: 60 * 60 * 24, // 24 hours
  },
};
