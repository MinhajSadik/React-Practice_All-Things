import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes(".js")
      ? "Warning: .js extension detected"
      : null;
    setTodo(inputValue);
    setWarning(updatedWarning);
  };

  return (
    <div>
      <h1>This is a Todo</h1>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>
      <hr />
      <h2>{warning || "Good Choice!"}</h2>
    </div>
  );
}

export default Todo;
