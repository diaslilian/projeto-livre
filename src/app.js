require("dotenv-safe").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connection made successfully.");
});

const index = require("./routes/index");
const candidates = require("./routes/candidatesRoute");
const companies = require("./routes/companiesRoute");
const admin = require("./routes/adminRoute");

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/candidates", candidates);
app.use("/companies", companies);
app.use("/admin", admin);

module.exports = app;
