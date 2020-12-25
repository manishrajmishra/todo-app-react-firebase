import React, { useState, useEffect } from "react";
import Todo from "./Todo.js";
import "./styles.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

const userName = prompt("What is your Name?");
export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //do not refresh the page
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
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
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
