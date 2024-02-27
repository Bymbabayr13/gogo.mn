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
  const { title, desc } = req.body;
  const list =
    await sql`insert into tasks(id, title, description) values(${Date.now()},${title},${desc})`;
  res.json(list);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const list = await sql`delete from tasks where id = ${id}`;
  res.json(list);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;
  const list =
    await sql`update tasks set title = ${title} ,description = ${desc} where id= ${id} `;
  res.json(list);
};

module.exports = {
  deleteTask,
  updateTask,
  createTask,
  readTask,
};
