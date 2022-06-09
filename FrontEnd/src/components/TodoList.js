import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todoList, getTodoListFromApiAfterChange, setEditTodo } = props;
  // console.log(todoList);

  return (
    <div className="todolist">
      {todoList.length === 0 ? <h3 className="empty">List is empty</h3> : ""}
      <div className="todos-container">
        {todoList.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo._id}
              getTodoListFromApiAfterChange={getTodoListFromApiAfterChange}
              setEditTodo={setEditTodo}
              editing={props.editing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
