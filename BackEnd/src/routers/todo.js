const express = require("express");
const app = express();
const todo = require("../models/todo");
const router = express.Router();
const todoModel = require("../models/todo");

// app.use(cors());

// lấy tất cả phần tử
router.get("/", (req, res, next) => {
  todoModel
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json("khong lay duoc all phan tu");
    });
});

router.post("/", (req, res, next) => {
  todoModel
    .create({
      todo: req.body.todo,
      isCompleted: req.body.isCompleted,
    })
    .then((data) => {
      // console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json("post that bai");
    });
});

router.put("/", (req, res, next) => {
  console.log(req.body);
  const id = req.body.id;
  // kiem tra neu co newTodo thi cap nhat cai todo neu khogn co thi cap nhap isCompleted
  if (req.body.newTodo) {
    todoModel
      .findByIdAndUpdate(id, {
        todo: req.body.newTodo,
        isCompleted: false,
      })
      .then((data) => {
        // console.log(data);
        res.json("update newtodo thanh cong");
      })
      .catch((err) => {
        res.json("updata newtodo that bai");
      });
  } else {
    console.log(req.body.id);
    console.log(typeof isCompleted);
    const isCompleted = req.body.isCompleted;
    todoModel
      .findByIdAndUpdate(id, {
        isCompleted: isCompleted,
      })
      .then((data) => {
        console.log(typeof data.isCompleted);
        res.json("update completed thanh cong");
      })
      .catch((err) => {
        res.json("updata completed that bai");
      });
  }
});

router.delete("/", (req, res, next) => {
  console.log(req.body);
  const id = req.body.id;
  todoModel
    .deleteOne({ _id: id })
    .then((data) => {
      console.log(data);
      res.json("delete thanh cong");
    })
    .catch((err) => {
      res.json("delete that bai");
    });
});

module.exports = router;
