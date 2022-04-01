import { useContext } from "react";
import { counterContext } from "../App";

export default function ComponentB() {
  const countContext = useContext(counterContext);

  return (
    <div>
      <p>Component - B</p>
      <button type="button" onClick={() => countContext.dispatch("increment")}>
        Increments
      </button>
      <button type="button" onClick={() => countContext.dispatch("decrement")}>
        Decrements
      </button>
    </div>
  );
}
