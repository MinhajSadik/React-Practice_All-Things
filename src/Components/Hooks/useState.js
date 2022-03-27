let states = [];
let stateIndex = -1;

//useState hook function
export function useState(defaultValue) {
  const index = ++stateIndex;

  if (states[index]) return states[index];

  const setValue = (newValue) => {
    states[index][0] = newValue;
    renderForUseState();
  };
  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}
