import React from "react";
import User from "./Components/User";

const App = () => {
  return (
    <div>
      <User render={(isLoggedIn) => (isLoggedIn ? "Minaj" : "Sharmina")} />
    </div>
  );
};

export default App;
