import React from "react";
import { toCelsius, toFahrenheit, tryConverter } from "./Functions/Converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends React.Component {
  state = {
    scale: "c",
    temperature: "",
  };

  handleChange = (e, scale) => {
    this.setState({
      scale,
      temperature: e.target.value,
    });
  };

  render() {
    const { scale, temperature } = this.state;
    const celsius =
      scale === "f" ? tryConverter(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConverter(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
