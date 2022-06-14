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
        getTodoListFromApiAfterChange();
      })
      .catch(function (error) {
        console.log("loi post todo");
      });
  };

  useEffect(() => {
    setTodoEdit(editing);
    if (editing) {
      document.querySelector(".editing").focus();
    }
  }, [editing]);

  const handleEdit = (todo) => {
    setEditTodo(todo);
    // set thang editting o app bang setEditTodo
  };

  const handleSave = (todo) => {
    setEditTodo();
    axios
      .put("http://localhost:4000/api/todo", {
        id: todo._id,
        newTodo: todoEdit.todo,
      })
      .then(function (response) {
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
        getTodoListFromApiAfterChange();
      })
      .catch(function (error) {
        console.log("loi post todo");
      });
  };

  const handleChage = (e) => {
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
