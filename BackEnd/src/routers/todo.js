const express = require("express");

const router = express.Router();
const todoModel = require("../models/todo");
const todoController = require("../controllers/todo");

// app.use(cors());

// lấy tất cả phần tử
router.get("/", todoController.get);

router.post("/", todoController.post);

router.put("/", todoController.put);

router.delete("/", todoController.delete);

module.exports = router;
