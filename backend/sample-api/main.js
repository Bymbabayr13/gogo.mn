const { json } = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
var cors = require("cors");

app.use(express.json());
app.use(cors());
app.get("/create", (req, res) => {
  const { title, desc } = req.query;
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);
  const articleid = list.length + 1;
  list.push({
    id: articleid,
    name: title,
    desc: desc,
  });
  fs.writeFileSync("test.json", JSON.stringify(list));
  res.json({ list });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
