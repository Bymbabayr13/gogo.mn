const express = require("express");
const CategoryRouter = express.Router();
const { nanoid } = require("nanoid");

const { sql } = require("../config/database");

CategoryRouter.get("/", async (req, res) => {
  const result = await sql`select * from categories`;
  res.json(result);
});
CategoryRouter.post("/", async (req, res) => {
  const { inputCategory } = req.body;
  const result =
    await sql`insert into categories(name, id) values(${inputCategory}, ${nanoid()})`;
  console.log(inputCategory, "sadfasfd");
  res.json(result);
});

module.exports = CategoryRouter;
