const { json } = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
var cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/articles", (_req, res) => {
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);

  res.json(list);
});
app.post("/create", (req, res) => {
  const { title, desc } = req.body;
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);
  const articleid = Date.now();
  list.push({
    id: articleid,
    title: title,
  });

  fs.writeFileSync("test.json", JSON.stringify(list));
  res.json(list);
});

app.delete("/create/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);
  console.log("list");
  const newList = list.filter((item) => item.id !== Number(id));
  console.log("new", newList);

  fs.writeFileSync("test.json", JSON.stringify(newList));
  res.json([{ status: "Success" }]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
