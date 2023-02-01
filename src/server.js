require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const cors = require("cors");
const morgan = require("morgan");

const router = require("./routes.js");

require("./database/index");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(router);

const port = process.env.PORT || 3333;

module.exports = mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err)),
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`connected server http://localhost:${port}`);
    }
  });
