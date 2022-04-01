import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "increment2":
      return {
        ...state,
        counter2: state.counter2 + action.value,
      };
    case "decrement2":
      return {
        ...state,
        counter2: state.counter2 - action.value,
      };
    default:
      return state;
  }
};

export default function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>Count: {count.counter}</div>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          Increment by One
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          Decrement by One
        </button>
      </div>
      <div>
        <div>Count: {count.counter2}</div>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment2", value: 1 })}
        >
          Increment2 by One
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement2", value: 1 })}
        >
          Decrement2 by One
        </button>
      </div>
    </div>
  );
}
