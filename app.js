//app entry

const express = require("express");
const app = express();

const handleCron = require("./cron");

require("dotenv").config();

app.get("/", (req, res) => {
  console.log("accueil");
  res.status(200).json({ success: true, msg: new Date() });
});
app.get("/cron1", handleCron.cron1);
app.get("/cron2", handleCron.cron2);

const port = process.env.PORT || 3100;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;
