import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = (props) => {
  const { todo, setEditTodo, editing, getTodoListFromApiAfterChange } = props;
  const [todoEdit, setTodoEdit] = useState();

  // console.log(editing);

  const handleDelete = (todo) => {
    axios
      .delete("http://localhost:4000/api/todo", {
        data: {
          id: todo._id,
        },
      })
      .then(function (response) {
        console.log(response);
        getTodoListFromApiAfterChange();
      })
      .catch(function (error) {
        console.log("loi post todo");
      });
  };

  useEffect(() => {
    console.log("chay khi edditing thay doi ");
    // set trang thai todoEdit cua component nay
    // if (editing && editing.todo) {
    // }
    setTodoEdit(editing);
    if (editing) {
      document.querySelector(".editing").focus();
    }
  }, [editing]);

  const handleEdit = (todo) => {
    setEditTodo(todo);
    console.log(todo);
    // set thang editting o app bang setEditTodo
  };

  const handleSave = (todo) => {
    console.log("chay khi save");
    setEditTodo();
    console.log(todoEdit);
    console.log(todo);
    axios
      .put("http://localhost:4000/api/todo", {
        id: todo._id,
        newTodo: todoEdit.todo,
      })
      .then(function (response) {
        console.log(response);
        console.log(todoEdit);
        getTodoListFromApiAfterChange();
      })
      .catch(function (error) {
        console.log("loi post todo");
      });
  };

  const handleCompletedWhenClick = (todo) => {
    // console.log(typeof todo.isCompleted);
    axios
      .put("http://localhost:4000/api/todo", {
        id: todo._id,
        isCompleted: !todo.isCompleted,
      })
      .then(function (response) {
        console.log(response);
        getTodoListFromApiAfterChange();
      })
      .catch(function (error) {
        console.log("loi post todo");
      });
  };

  const handleChage = (e) => {
    console.log(e.target.value);
    const newOb = { ...todoEdit };
    newOb.todo = e.target.value;
    setTodoEdit(newOb);
  };
  //  setTodoEdit

  return (
    <div className="todo">
      {editing && editing._id === todo._id ? (
        <input
          className="editing"
          value={todoEdit ? todoEdit.todo : ""}
          onChange={(e) => handleChage(e)}
          // set state cua component
        ></input>
      ) : (
        <span
          onClick={() => handleCompletedWhenClick(todo)}
          className="content"
          style={
            todo.isCompleted
              ? { textDecoration: "line-through", opacity: 0.7 }
              : {}
          }
        >
          {todo.todo}
        </span>
      )}

      {editing && editing._id && editing._id === todo._id ? (
        <span className="edit-btn btn" onClick={() => handleSave(todo)}>
          Save
        </span>
      ) : (
        <span className="edit-btn btn" onClick={() => handleEdit(todo)}>
          Edit
        </span>
      )}

      <span className="delete-btn btn" onClick={() => handleDelete(todo)}>
        Delete
      </span>
    </div>
  );
};

export default Todo;
