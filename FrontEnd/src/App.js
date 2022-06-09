import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import axios from "axios";

function App() {
  const [todolist, setTodoList] = useState([]);
  const [editing, setEditing] = useState();

  const getTodoListFromApiAfterChange = () => {
    axios
      .get("http://localhost:4000/api/todo")
      .then(function (response) {
        // handle success

        setTodoList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getTodoListFromApiAfterChange();
  }, []);

  const setEditTodo = (todo) => {
    // console.log(todo);
    setEditing(todo);
  };

  return (
    <div className="App">
      <h1 className="name">ToDo List</h1>
      <AddTodo getTodoListFromApiAfterChange={getTodoListFromApiAfterChange} />
      <TodoList
        todoList={todolist}
        getTodoListFromApiAfterChange={getTodoListFromApiAfterChange}
        setEditTodo={setEditTodo}
        editing={editing}
      />
    </div>
  );
}

export default App;
