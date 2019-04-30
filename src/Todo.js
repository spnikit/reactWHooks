import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          toggleIsEditing={toggleIsEditing}
          text={task}
          editTodo={editTodo}
          id={id}
        />
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>

            <IconButton onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
