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
      style={{
        marginLeft: "1rem",
        width: "50%"
      }}
    >
      <TextField autoFocus value={state} onChange={handleChange} fullWidth />
      <button type="submit">Submit</button>
      <button style={{ margin: "1rem" }} onClick={toggleIsEditing}>
        Cancel
      </button>
    </form>
  );
}

export default EditTodoForm;
