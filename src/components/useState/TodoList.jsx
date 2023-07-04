import React, { useState } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState([]);
  const handleTodoList = (e) => {
    console.log(e);
    setTodoList(e.target.value);
  };

  return (
    <div style={{ padding: "3rem" }}>
      <input
        onClick={handleTodoList}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
