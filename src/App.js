import React, { useState } from "react";
import "./styles.css";
const userName = prompt("What is your Name?");
export default function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Bring milk from market",
    "Buy some chocolates"
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    setTodos([...todos, input]);
  };

  return (
    <div className="App">
      <h1>Hello, {userName}</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
