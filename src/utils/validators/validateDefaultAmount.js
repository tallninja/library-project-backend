const {
  book: { defaultPaymentRate },
} = require("../../config/keys");
const calculateDays = require("../calculateDays");
const calculateAmount = require("../calculateAmount");

const validateDefaultAmount = (amount, returnDate, actualReturnDate) => {
  const numberOfDaysDefaulted = calculateDays(returnDate, actualReturnDate);
  const amountToBePaid = calculateAmount(numberOfDaysDefaulted);

  return parseInt(amount) === amountToBePaid;
};

module.exports = validateDefaultAmount;
