const dotenv = require("dotenv");
dotenv.config();
const db = require("./dbsetup/models/index");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/email", require("./router/email.router"));

db.sequelize.sync().then(
  async (success) => {
    try {
      app.listen(port, () => {
        console.log(`Example listening on port ${process.env.port}`);
        console.log("hii");
      });
    } catch (e) {
      console.log(e);
    }
  },
  (fail) => {
    console.log(fail);
    console.log("DB_SYNC_ERROR");
  }
);
