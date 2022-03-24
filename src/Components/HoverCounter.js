import React from "react";

function HoverCounter({ count, incrementCount, theme }) {
  const style =
    theme === "dark" ? { backgroundColor: "white", color: "black" } : {};

  return (
    <div>
      <h1 onMouseOver={incrementCount} style={style}>
        Hovered {count} times
      </h1>
    </div>
  );
}

export default HoverCounter;
