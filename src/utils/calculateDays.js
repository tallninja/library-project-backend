const {
  book: { defaultPaymentRate },
} = require("../config/keys");

const calculateDays = (returnDate, actualReturnDate) => {
  return Math.ceil(
    (actualReturnDate.getTime() - returnDate.getTime()) / (1000 * 3600 * 24)
  );
};

module.exports = calculateDays;
