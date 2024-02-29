const express = require("express");
const transactionRouter = express.Router();
const { sql } = require("../config/database");

transactionRouter.post("/", async (req, res) => {
  const { name, amount, description } = req.body;
  const result =
    await sql`insert into transactions(name, amount) values(${name},${amount})`;
  res.json(result);
});

transactionRouter.get("/", async (req, res) => {
  const result = await sql`select * from transactions`;
  res.json(result);
});

module.exports = transactionRouter;
