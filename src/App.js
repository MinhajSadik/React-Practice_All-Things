import React from "react";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
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
        <Form />
      </div>
    );
  }
}

export default App;
