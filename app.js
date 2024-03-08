const express = require("express");
const app = express();
const handleCron = require("./cron.js");

require("dotenv").config();

app.get("/", handleCron);

const port = process.env.PORT || 3100;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
