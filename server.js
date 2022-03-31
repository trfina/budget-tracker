const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://trfina:test123@cluster0.e3lwb.mongodb.net/budget-tracker?retryWrites=true&w=majority";
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://trfina:PwMongo001#@cluster0.e3lwb.mongodb.net/test";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});