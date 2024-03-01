const express = require("express");
const transactionRouter = express.Router();

const { sql } = require("../config/database");

transactionRouter.post("/", async (req, res) => {
  const { name, amount, description } = req.body;

  const result =
    await sql`insert into transactions(name, amount, description) values(${name},${Number(
      amount
    )}, ${description})`;
  res.json(result);
});

transactionRouter.get("/", async (req, res) => {
  const result = await sql`select * from transactions`;
  res.json(result);
});

transactionRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await sql`delete from transactions where id = ${id}`;

  res.json(result);
});

module.exports = transactionRouter;
