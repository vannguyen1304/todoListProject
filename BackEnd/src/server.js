const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const todoRouter = require("./routers/todo");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res, next) => {
  res.json("get method");
});

app.use("/api/todo", todoRouter);

app.listen(port, () => {
  console.log(`listen tao port ${port}`);
});
