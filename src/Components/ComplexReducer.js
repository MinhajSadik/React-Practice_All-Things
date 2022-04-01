import { useReducer } from "react";
const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count: {count.counter}</div>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <br />
      <br />
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
}
