import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return <div>Counter</div>;
  }
}

export default Counter;
