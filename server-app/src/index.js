const express = require("express");
const mongodb = require("./config/dbConn");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello From DalHours!");
});

app.listen(port, async () => {
  await mongodb.connect();
  return console.log(`Express is listening at http://localhost:${port}`);
});
