import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    const { render } = this.props;
    return render(count, this.incrementCount);
  }
}

export default Counter;
