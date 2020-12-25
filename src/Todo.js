import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";
import "./Todo.css";
function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary="Todo" secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default Todo;
