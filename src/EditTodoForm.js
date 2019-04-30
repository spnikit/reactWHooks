import React from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";

function EditTodoForm({ toggleIsEditing, text, editTodo, id }) {
  const [state, handleChange] = useInputState(text);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, state);
        toggleIsEditing();
      }}
    >
      <TextField value={state} onChange={handleChange} fullWidth />
      {/* <button style={{ margin: "1rem" }} onClick={toggleIsEditing}>
        Cancel
      </button> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditTodoForm;
