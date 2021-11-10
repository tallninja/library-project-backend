const nodemailer = require("nodemailer");
const {
  email: { HOST, PORT, USER, PASSWORD, SERVICE },
} = require("../../config/keys");

const sendEmail = async (recipient, subject, body, calllback) => {
  const transporter = nodemailer.createTransport({
    service: SERVICE,
    auth: {
      user: USER,
      pass: PASSWORD,
    },
  });

  await transporter.sendMail(
    {
      from: USER,
      to: recipient,
      subject: subject,
      text: body,
    },
    (err, info) => {
      if (err) {
        calllback(err, null);
      }
      calllback(null, info);
    }
  );
};

module.exports = sendEmail;
