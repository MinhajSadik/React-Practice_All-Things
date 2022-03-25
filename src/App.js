import React from "react";
import ClickCounterHOC from "./Components/HOC/ClickCounterHOC";
import HoverCounterHOC from "./Components/HOC/HoverCounterHOC";

class App extends React.Component {
  // state = {
  //   theme: "light",
  //   switchTheme: () => {
  //     this.setState((prevState) => ({
  //       theme: prevState.theme === "dark" ? "light" : "dark",
  //     }));
  //   },
  // };

  render() {
    return (
      <div>
        <ClickCounterHOC />
        <HoverCounterHOC />
        {/* <User render={(isLoggedIn) => (isLoggedIn ? "Minaj" : "Sharmina")} /> */}
        {/* <Counter
        render={(counter, incrementCount) => (
          <ClickCounter counter={counter} incrementCount={incrementCount} />
        )}
      /> */}
        {/* <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter> */}
        {/* <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider> */}
        <br />
        <br />
        {/* <Form /> */}

        {/* <Calculator /> */}

        <br />
        <br />
        {/* <Emoji>
          {({ addEmoji }) => (
            <Bracket>
              {({ addBracket }) => (
                <Text addEmoji={addEmoji} addBracket={addBracket} />
              )}
            </Bracket>
          )}
        </Emoji> */}
      </div>
    );
  }
}

export default App;
