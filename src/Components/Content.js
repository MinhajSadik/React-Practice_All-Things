import React, { useContext } from "react";
import ThemeContext from "../Contexts/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;
  console.log("Content reRendered");

  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}

export default Content;
