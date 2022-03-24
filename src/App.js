import React from "react";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import User from "./Components/User";
import Section from "./Section";

class App extends React.Component {
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
        <Section />
      </div>
    );
  }
}

export default App;
