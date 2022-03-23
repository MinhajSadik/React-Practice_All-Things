import React from "react";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import User from "./Components/User";

const App = () => {
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
          <ClickCounter counter={counter} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
};

export default App;
