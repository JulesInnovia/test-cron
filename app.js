const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("test", Date.now());
});

const port = 3100;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
