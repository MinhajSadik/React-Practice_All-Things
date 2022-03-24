import React from "react";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
  state = {
    temperature: "",
  };

  handleTemperature = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  };

  render() {
    const { temperature } = this.state;

    return (
      <div>
        <fieldset>
          <legend>Enter Temperature in Celsius:</legend>
          <input
            type="text"
            value={temperature}
            onChange={this.handleTemperature}
          />
        </fieldset>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
