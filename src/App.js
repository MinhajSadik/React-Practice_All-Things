import React, { useState } from "react";
import Button from "./Components/Button";
import ShowCount from "./Components/ShowCount";
import Tittle from "./Components/Title";

function App() {
  // const [show, setShow] = useState(true);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCountByOne = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const incrementCountByFive = () => {
    setCount2((prevCount) => prevCount + 5);
  };

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
      <Tittle />
      <ShowCount count={count1} title="counter1" />
      <Button handleClick={incrementCountByOne}>Increment by One</Button>
      <hr />
      <ShowCount count={count2} title="counter2" />
      <Button handleClick={incrementCountByFive}>Increment by Five</Button>

      {/* <div>{show && <UseEffect />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide" : "Show"}
        </button>
      </p> */}
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
