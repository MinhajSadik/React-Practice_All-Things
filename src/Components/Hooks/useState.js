import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Components/Todo";

let states = [];
let stateIndex = -1;

//useState hook function
export function useState(defaultValue) {
  const index = ++stateIndex;

  if (states[index]) return states[index];

  const setValue = (newValue) => {
    states[index][0] = newValue;
    rerender();
  };
  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

function rerender() {
  stateIndex = -1;
  ReactDOM.render(<Todo />, document.getElementById("root"));
}
