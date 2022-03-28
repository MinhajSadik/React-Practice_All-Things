import React, { useState } from "react";
// import { useState } from './Hooks/useState';

function Todo() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes(".js")
      ? "Warning: .js extension detected"
      : null;
    setTodo(inputValue);
    setWarning(updatedWarning);
  };

  const { title, description } = todo;

  return (
    <div>
      <h1>This is a Todo</h1>
      <p>{title}</p>
      <input
        type="text"
        value={title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <p>
        <textarea
          name="todo"
          value={description}
          onChange={(e) =>
            setTodo({
              ...todo,
              description: e.target.value,
            })
          }
        />
      </p>
      <hr />
      <h2>{warning || "Good Choice!"}</h2>
    </div>
  );
}

export default Todo;
