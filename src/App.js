const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const passport = require("passport");

const {
  mongo: { URI },
  auth: { cookieSessionSecret, cookieSessionExpiration },
} = require("./config/keys");
const {
  mongoose,
  auth: { role: Role },
} = require("./models");

class App {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 5000;
    this.routes = require("./routes");
  }

  dbInit = () => {
    mongoose
      .connect(URI)
      .then(() => {
        console.log("Successfully connected to the Database !");
      })
      .catch((err) => {
        console.error("Failed to connect to the Database !", err);
      });

    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user",
        }).save((err) => {
          if (err) {
            console.error("error", err);
          } else {
            console.log("Successfully created 'user' role !");
          }
        });
        new Role({
          name: "librarian",
        }).save((err) => {
          if (err) {
            console.error("error", err);
          } else {
            console.log("Successfully created 'librarian' role !");
          }
        });
        new Role({
          name: "admin",
        }).save((err) => {
          if (err) {
            console.error("error", err);
          } else {
            console.log("Successfully created 'admin' role !");
          }
        });
      }
    });
  };

  setup = () => {
    this.app.use(cors());
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
    this.app.use(morgan("dev")); // used to log client requests for development porposes
    this.dbInit();
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
        console.log(`Server lstening on PORT=${this.PORT}`);
      }
    });
  };
}

module.exports = App;
