import React from "react";
import Calculator from "./Components/Calculator";
import ClickCounter from "./Components/ClickCounter";
import Bracket from "./Components/Composition/Bracket";
import Emoji from "./Components/Composition/Emoji";
import Text from "./Components/Composition/Text";
import Counter from "./Components/Counter";
import Section from "./Components/Section";
import User from "./Components/User";
import ThemeContext from "./Contexts/themeContext";

class App extends React.Component {
  state = {
    theme: "light",
    switchTheme: () => {
      this.setState((prevState) => ({
        theme: prevState.theme === "dark" ? "light" : "dark",
      }));
    },
  };

  render() {
    return (
      <div>
        <User render={(isLoggedIn) => (isLoggedIn ? "Minaj" : "Sharmina")} />
        {/* <Counter
        render={(counter, incrementCount) => (
          <ClickCounter counter={counter} incrementCount={incrementCount} />
        )}
      /> */}
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
        <br />
        <br />
        {/* <Form /> */}

        <Calculator />

        <br />
        <br />
        <Emoji>
          {({ addEmoji }) => (
            <Bracket>
              {({ addBracket }) => (
                <Text addEmoji={addEmoji} addBracket={addBracket} />
              )}
            </Bracket>
          )}
        </Emoji>
      </div>
    );
  }
}

export default App;
