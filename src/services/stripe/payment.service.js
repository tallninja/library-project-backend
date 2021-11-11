const {
  stripe: { publishableKey, secretKey },
} = require("../../config/keys");
const stripe = require("stripe")(secretKey);

const payCharges = async (amount) => {
  const paymentIntent = await stripe.paymentIntent({
    amount: amount,
    currency: "usd",
  });
  return paymentIntent;
};

module.exports = payCharges;
