const express = require("express");
const router = express.Router();
const todoModel = require("../models/todo");
const todoController = require("../controllers/todo");
const middleware = require("../middlewares/middleware");

// lấy tất cả phần tử
router.get("/", todoController.get);

router.post(
  "/",
  middleware.validateEmty,
  middleware.validateLength,
  middleware.validateSpecialsCharater,
  todoController.post
);

router.put("/", todoController.put);

router.delete("/", todoController.delete);

module.exports = router;
