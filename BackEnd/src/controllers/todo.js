const todoModel = require("../models/todo");

const todoController = {
  get: function (req, res, next) {
    todoModel
      .find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json("khong lay duoc all phan tu");
      });
  },
  post: function (req, res, next) {
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
  },
  put: function (req, res, next) {
    const id = req.body.id;
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
  },
  delete: function (req, res, next) {
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
  },
};

module.exports = todoController;
