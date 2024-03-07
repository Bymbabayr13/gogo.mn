const express = require("express");
const transactionRouter = express.Router();
dayjs().format();

const { sql } = require("../config/database");

transactionRouter.post("/", async (req, res) => {
  const { name, amount, description, selectedOption, date, time, option } =
    req.body;
  const result =
    await sql`insert into transactions(name, amount, description, category_id, updated_at, amount_type) 
            values(${name},${Number(amount)}, ${description} , ${
      selectedOption.value
    }, ${Date.now()}, ${option})`;
  res.json(result);
  console.log(selectedOption, date, time, selectedOption.value);
});

transactionRouter.get("/", async (req, res) => {
  const getCategories = await sql`select transactions.id,
  amount,
  description,
  transactions.name,
  category_id,
  amount_type,
  categories.name category_name
  from transactions
  left join categories on transactions.category_id = categories.id;`;
  res.json(getCategories);
});

// transactionRouter.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, desc, amount } = req.body;
//   const result =
//     await sql`update transactions set name = ${title} ,description = ${desc}, amount = ${amount} where id= ${id} `;
//   res.json(result);
// });

transactionRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await sql`delete from transactions where id = ${id}`;

  res.json(result);
});

module.exports = transactionRouter;
