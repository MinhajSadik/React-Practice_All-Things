import React from "react";
import withCounter from "./withCounter";

const ClickCounterHOC = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} Times
      </button>
    </div>
  );
};

export default withCounter(ClickCounterHOC);
