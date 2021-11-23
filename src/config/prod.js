module.exports = {
  mongo: {
    MONGO_URI: process.env.MONGO_URI,
  },
  auth: {
    cookieSessionSecret: process.env.AUTH_SECRET,
    cookieSessionExpiration: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
  book: {
    borrowPeriod: 60 * 60 * 24 * 7, // 7 days
    defaultPaymentRate: 100, // 100 shillings per day
  },
  email: {
    SERVICE: "Gmail",
    HOST: "smtp.gmail.com",
    PORT: 587,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    BASE_URL: process.env.BASE_URL,
  },
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
};
