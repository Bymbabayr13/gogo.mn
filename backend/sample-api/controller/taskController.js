const postgres = require("postgres");
require("dotenv").config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

const fs = require("fs");
const { title } = require("process");

const readTask = async (_req, res) => {
  const read = await sql`select * from tasks`;
  res.json(read);
};

const createTask = async (req, res) => {
  const read = await sql`select * from tasks`;
  const { title } = req.body;
  const articleid = read.length + 1;
  const list = await sql`insert into tasks values(${articleid},${title})`;
  res.json(list);
  console.log(articleid, title);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = fs.readFileSync("test.json", "utf8");
  const list = JSON.parse(data);
  const newList = list.filter((item) => item.id !== Number(id));
  fs.writeFileSync("test.json", JSON.stringify(newList));
  res.json([{ status: "Success" }]);
};

const updateTask = async (req, res) => {
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
