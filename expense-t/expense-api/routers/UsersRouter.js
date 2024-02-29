const express = require("express");
const usersRouter = express.Router();
const { sql } = require("../config/database");

usersRouter.post("/", async (req, res) => {
  const { name, email, password, avatar_img } = req.body;
  const result =
    await sql`insert into users(name, email, password, avatar_img) values(${name} ,${email} ,${password}, ${avatar_img})`;
  res.json(result);
});

usersRouter.get("/", async (req, res) => {
  const result = await sql`select * from users`;
  res.json(result);
});

module.exports = usersRouter;
