import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import uuid from "uuid/v4";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const initialTodos = [
  { id: 1, task: "clean a fishtank", completed: false },
  { id: 2, task: "wash a car", completed: false },
  { id: 3, task: "grow beard", completed: false }
];

function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = todoText => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        task: todoText,
        completed: false
      }
    ]);
  };

  const removeTodo = todoId => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const toggleTodo = todoId => {
    const toggledTodosArr = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(toggledTodosArr);
  };

  const editTodo = (todoId, editedTask) => {
    const toggledTodosArr = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: editedTask } : todo
    );

    setTodos(toggledTodosArr);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
