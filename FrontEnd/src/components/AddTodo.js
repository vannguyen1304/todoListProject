import React, { useState } from "react";
import axios from "axios";

const AddTodo = (props) => {
  const { getTodoListFromApiAfterChange } = props;
  const [valueInput, setValueInput] = useState("");
  const handleAdd = () => {
    if (true) {
      setValueInput("");
      // console.log(valueInput);
      axios
        .post("http://localhost:4000/api/todo", {
          todo: valueInput,
          isCompleted: false,
        })
        .then(function (response) {
          // console.log(response);
          console.log("post thanh cong ");
          getTodoListFromApiAfterChange();
        })
        .catch(function (error) {
          console.log("loi post todo");
        });
    }
  };
  return (
    <div className="add-todo">
      <input
        type="text"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
};

export default AddTodo;
