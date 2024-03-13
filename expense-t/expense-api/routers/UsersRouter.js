const express = require("express");
const usersRouter = express.Router();
const { sql } = require("../config/database");
usersRouter.post("/", async (req, res) => {
  const { name, newemail, newpass } = req.body;
  await sql`insert into users(name, email, password) values(${name} ,${newemail} ,${newpass})`;
  res.send("ok");
});
usersRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  const result = await sql`select * from users where email = ${email}`;

  if (result.length === 0) {
    res.sendStatus(401);
    return;
  }

  console.log(result, email, pass);
  if (result[0].email !== email) {
    res.sendStatus(401);
    return;
  }
  if (result[0].password !== pass) {
    res.sendStatus(401);
    return;
  }
  res.send("ok");
});

usersRouter.get("/login", async (req, res) => {
  const result = await sql`select * from users`;
  res.json(result);
});

usersRouter.get("/", async (req, res) => {
  const result = await sql`select * from users`;
  res.json(result);
});
module.exports = usersRouter;
