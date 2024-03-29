const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the blue/green edit 1");
});

app.get("/info", (req, res) => {
  res.send(process.env);
});

app.listen(80, () => {
  console.log(`listening on ${process.env.PORT}`);
  console.log(`Node env ${process.env.NODE_ENV}`);
});
