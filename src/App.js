import React, { useState } from "react";
import "./styles.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
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
        <FormControl>
          <InputLabel> ✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
