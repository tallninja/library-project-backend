const {
  book: { defaultPaymentRate },
} = require("../config/keys");

const calculateAmount = (days) => {
  return Math.ceil(days * defaultPaymentRate);
};

module.exports = calculateAmount;
