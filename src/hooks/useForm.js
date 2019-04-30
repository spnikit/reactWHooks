import React, { useState } from "react";

function useForm(initialVal) {
  const [state, setState] = useState(initialVal);

  function Form() {
    return (
      <input
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
      />
    );
  }

  return [state, Form];
}

export default useForm;
