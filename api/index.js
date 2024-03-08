const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  console.log("mouahaha");
  res.status(200).json({ success: true, msg: new Date() });
});
app.get("/cron", (req, res) => {
  console.log("mouahaha");
  res.status(200).json({ success: true, msg: "MOuahAHahAh" });
});

const port = process.env.PORT || 3100;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;