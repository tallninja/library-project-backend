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
    defaultPaymentRate: 100, // 100 shillings per day
  },
  email: {
    SERVICE: process.env.SERVICE,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    BASE_URL: process.env.BASE_URL,
  },
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
};
