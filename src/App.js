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
    event.preventDefault(); //do not refresh the page
    setTodos([...todos, input]);
    setInput(""); //clear up the input after submiting
  };

  return (
    <div className="App">
      <h1>Hello, {userName}</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
