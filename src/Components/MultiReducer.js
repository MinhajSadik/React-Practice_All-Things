import React, { useReducer } from "react";

const initialState = 0;
const initialStateOne = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function MultiReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countOne, dispatchOne] = useReducer(reducer, initialStateOne);

  return (
    <div>
      <div>
        <div>Count - {count}</div>
        <button type="button" onClick={() => dispatch("increment")}>
          Increment
        </button>
        <br />
        <br />
        <button type="button" onClick={() => dispatch("decrement")}>
          Decrement
        </button>
      </div>
      <br />
      <div>
        <div>CountOne - {countOne}</div>
        <button type="button" onClick={() => dispatchOne("increment")}>
          Increment
        </button>
        <br />
        <br />
        <button type="button" onClick={() => dispatchOne("decrement")}>
          Decrement
        </button>
      </div>
    </div>
  );
}
