require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

// init middleware
app.use(morgan("dev")); // Ghi logs
app.use(helmet()); // Ko cho hacker biết công nghệ của website hiện tại
app.use(compression()); // Nén data trước khi gửi cho Client

// init db
require("./dbs/init.mongodb");
const { checkOverLoad } = require("./helpers/check.connect");
checkOverLoad();
// init router
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome",
  });
});
// handle error

module.exports = app;
