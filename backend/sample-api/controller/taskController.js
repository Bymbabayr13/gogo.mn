const fs = require("fs");

const readTask = (_req, res) => {
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);

  res.json(list);
};

const createTask = (req, res) => {
  const { title, desc } = req.body;
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);
  const articleid = Date.now();
  list.push({
    id: articleid,
    title: title,
    desc: desc,
  });

  fs.writeFileSync("test.json", JSON.stringify(list));
  res.json(list);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);
  const newList = list.filter((item) => item.id !== Number(id));
  fs.writeFileSync("test.json", JSON.stringify(newList));
  res.json([{ status: "Success" }]);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);
  const index = list.findIndex((item) => item.id == Number(id));
  console.log(Number(id), id, list);
  list[index].title = title;
  list[index].desc = desc;

  fs.writeFileSync("test.json", JSON.stringify(list));
  res.json([{ status: "Success" }]);
};

module.exports = {
  deleteTask,
  updateTask,
  createTask,
  readTask,
};
