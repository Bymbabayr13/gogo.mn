const express = require("express");
var cors = require("cors");
const usersRouter = require("./routers/UsersRouter");
const transactionRouter = require("./routers/TransactionsRouter");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/Users", usersRouter);
app.use("/Transactions", transactionRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
