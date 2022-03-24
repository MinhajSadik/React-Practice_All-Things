import React from "react";
import ThemeContext from "../Contexts/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

function Content() {
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(counter, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {(theme) => (
                <HoverCounter count={counter} incrementCount={incrementCount} />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
}

export default Content;
