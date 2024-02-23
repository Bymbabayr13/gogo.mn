const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

const taskRouter = require("./routes/tasks");

app.use(express.json());
app.use(cors());

app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
