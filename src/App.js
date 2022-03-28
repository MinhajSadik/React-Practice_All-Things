import React, { useState } from "react";
import UseEffect from "./Components/UseEffect";

function App() {
  const [show, setShow] = useState(true);
  // state = {
  //   theme: "light",
  //   switchTheme: () => {
  //     this.setState((prevState) => ({
  //       theme: prevState.theme === "dark" ? "light" : "dark",
  //     }));
  //   },
  // };

  return (
    <div>
      <div>{show && <UseEffect />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide" : "Show"}
        </button>
      </p>
      {/* <Counter /> */}
      {/* <ClickCounterHOC />
        <HoverCounterHOC /> */}
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

export default App;
