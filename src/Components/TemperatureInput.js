import React from "react";
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
class TemperatureInput extends React.Component {
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
    const { scale } = this.props;

    return (
      <div>
        <fieldset>
          <legend>Enter Temperature in {scaleNames[scale]}:</legend>
          <input
            type="text"
            value={temperature}
            onChange={this.handleTemperature}
          />
        </fieldset>
        {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
      </div>
    );
  }
}

export default TemperatureInput;
