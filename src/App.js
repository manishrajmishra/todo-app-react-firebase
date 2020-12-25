import React, { useState } from "react";
import "./styles.css";
const userName = prompt("What is your Name?");
export default function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Bring milk from market"
  ]);
  return (
    <div className="App">
      <h1>Hello, {userName}</h1>
      <input />
      <button>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
