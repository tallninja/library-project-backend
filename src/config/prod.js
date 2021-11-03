module.exports = {
  mongo: {
    URI: process.env.MONGO_URI,
  },
  auth: {
    cookieSessionSecret: process.env.AUTH_SECRET,
    cookieSessionExpiration: 60 * 60 * 24, // 24 hours
  },
};
