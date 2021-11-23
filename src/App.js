const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const passport = require("passport");

const {
  auth: { cookieSessionSecret, cookieSessionExpiration },
} = require("./config/keys");
const { dbInit } = require("./models");

class App {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 5000;
    this.routes = require("./routes");
  }

  setup = () => {
    // this.app.use(cors()); // handle CORS requests
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json()); // replaced bodyparser
    this.app.use(
      cookieSession({
        maxAge: cookieSessionExpiration,
        keys: [cookieSessionSecret],
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    if (process.env.NODE_ENV === "production") {
      this.app.use(morgan("combined"));
    }
    this.app.use(morgan("dev")); // used to log client requests for development porposes
    dbInit();
  };

  run = () => {
    this.setup(); // setup the middlewares and initial configuration
    this.app.get("/", (req, res) => {
      res.status(200).json({ message: "This the LMS backend !" });
    });
    this.app.use("/api", this.routes);
    this.app.listen(this.PORT, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Server listening on PORT=${this.PORT}`);
      }
    });
  };
}

module.exports = App;
