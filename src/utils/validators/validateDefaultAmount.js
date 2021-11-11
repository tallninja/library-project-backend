const {
  book: { defaultPaymentRate },
} = require("../../config/keys");
const { calculateDays } = require("../calculateDays");
const { calculateAmount } = require("../calculateAmount");

const validateDefaultAmount = (amount, returnDate, actualReturnDate) => {
  const numberOfDaysDefaulted = calculateDays(returnDate, actualReturnDate);
  const amountToBePaid = calculateAmount(numberOfDaysDefaulted);

  if ((amount = amountToBePaid)) {
    return true;
  }
  return false;
};

module.exports = validateDefaultAmount;
