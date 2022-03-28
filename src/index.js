import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));

//herewith i create an useState hook function for more experienced developers
// let states = [];
// let stateIndex = -1;

// //useState hook function
// function useState(defaultValue) {
//   const index = ++stateIndex;

//   if (states[index]) return states[index];

//   const setValue = (newValue) => {
//     states[index][0] = newValue;
//     renderForUseState();
//   };
//   const returnArray = [defaultValue, setValue];
//   states[index] = returnArray;
//   return returnArray;
// }

// function App() {
//   const [todo, setTodo] = useState("");
//   const [warning, setWarning] = useState(null);

//   const handleInput = (e) => {
//     const inputValue = e.target.value;
//     const updatedWarning = inputValue.includes(".js")
//       ? "Warning: .js extension detected"
//       : null;
//     setTodo(inputValue);
//     setWarning(updatedWarning);
//   };
//   return (
//     <div>
//       <h1>This is a Todo</h1>
//       <p>{todo}</p>
//       <p>
//         <textarea name="todo" value={todo} onChange={handleInput} />
//       </p>
//       <hr />
//       <h2>{warning || "Good Choice!"}</h2>
//     </div>
//   );
// }

// function renderForUseState() {
//   stateIndex = -1;
//   ReactDOM.render(<App />, document.getElementById("root"));
// }
