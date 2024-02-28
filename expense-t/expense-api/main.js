const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;
const postgres = require("postgres");
require("dotenv").config();

app.use(express.json());
app.use(cors());

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

app.post("/create-user", async (req, res) => {
  const { name, email, password, avatar_img } = req.body;
  const result =
    await sql`insert into users(user_name, user_email, user_password, avatar_img) values(${name} ,${email} ,${password}, ${avatar_img})`;
  res.json(result);
});
app.get("/", async (req, res) => {
  const result = await sql`select * from users`;
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
