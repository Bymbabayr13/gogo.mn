const express = require("express");
const usersRouter = express.Router();
const { sql } = require("../config/database");
const DBemail = "tuya@gmail.com";
const DBPass = "password";
usersRouter.post("/", async (req, res) => {
  const { name, newemail, newpass } = req.body;
  await sql`insert into users(name, email, password) values(${name} ,${newemail} ,${newpass})`;
  res.send("ok");
});
usersRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  if (email !== DBemail) {
    res.sendStatus(401);
    return;
  }
  if (pass !== DBPass) {
    res.sendStatus(401);
    return;
  }
  res.json(["ok"]);
});

usersRouter.get("/", async (req, res) => {
  const result = await sql`select * from users`;
  res.json(result);
});
module.exports = usersRouter;
