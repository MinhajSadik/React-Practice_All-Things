import React, { Component } from "react";

export default class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.incrementCount}>
          Click {count} Me
        </button>
      </div>
    );
  }
}
