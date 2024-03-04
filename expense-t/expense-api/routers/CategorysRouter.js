const express = require("express");
const CategoryRouter = express.Router();

const { sql } = require("../config/database");

CategoryRouter.get("/", async (req, res) => {
  const result = await sql`select * from categories`;
  res.json(result);
});
CategoryRouter.post("/", async (req, res) => {
  const { inputCategory, id } = req.body;
  const result =
    await sql`insert into categories(name, id) values(${inputCategory}, ${id})`;
  console.log(inputCategory, "sadfasfd");
  res.json(result);
});

module.exports = CategoryRouter;
