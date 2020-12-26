import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button, Modal, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Todo(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [input, setInput] = useState("");
  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h1>Edit Todo</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo} variant="contained" color="primary">
            Update Todo
          </Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy Deadline 
⏰"
          />
        </ListItem>
        <Button
          onClick={(e) => setOpen(true)}
          variant="contained"
          color="primary"
        >
          Edit Todo
        </Button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        ></DeleteForeverIcon>
      </List>
    </>
  );
}

export default Todo;
