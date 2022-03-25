import React from "react";
import withCounter from "./withCounter";

const HoverCounterHOC = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h1 type="button" onMouseOver={incrementCount}>
        Hovered {count} Times
      </h1>
    </div>
  );
};

export default withCounter(HoverCounterHOC);
