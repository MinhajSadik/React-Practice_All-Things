import React from "react";

export default function ClickCounter({ counter, incrementCount }) {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Click {counter} Me
      </button>
    </div>
  );
}
