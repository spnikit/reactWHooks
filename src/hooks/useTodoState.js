import { useState } from "react";
import uuid from "uuid/v4";

function useTodoState(initialState) {
  const [todos, setTodos] = useState(initialState);

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

  return [todos, addTodo, removeTodo, toggleTodo, editTodo];
}

export default useTodoState;
