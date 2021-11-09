module.exports = {
  mongo: {
    URI: process.env.MONGO_URI,
  },
  auth: {
    cookieSessionSecret: process.env.AUTH_SECRET,
    cookieSessionExpiration: 1000 * 60 * 60 * 24 * 1, // 1 day
  },
  book: {
    borrowPeriod: 60 * 60 * 24 * 7, // 7 days
  },
};
