const { json } = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/create", (req, res) => {
  const content = {
    name: req.query.title,
    desc: req.query.desc,
  };
  fs.writeFileSync("test.json", JSON.stringify(content));
  res.json([{ ner: "ok" }]);
});

app.get("/", (req, res) => {
  const data = fs.readFileSync("test.json", "utf8");
  res.json(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
