import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(({ id, task, completed }) => (
          <Todo
            task={task}
            key={id}
            completed={completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            id={id}
          />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
