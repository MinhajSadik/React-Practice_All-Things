import React from "react";
import Counter from "./Components/Counter";
import HoverCounter from "./Components/HoverCounter";

function Content({ count, incrementCount }) {
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default Content;
