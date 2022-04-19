// import { createContext } from "react";

import { Route, Router, Switch } from "react-router-dom";
import about from "./ReactRouterDOM/About";
import Home from "./ReactRouterDOM/Home";
import Navbar from "./ReactRouterDOM/Navbar";

// export const counterContext = createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

function App() {
  // const [show, setShow] = useState(true);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const incrementCountByOne = useCallback(() => {
  //   setCount1((prevCount) => prevCount + 1);
  // }, []);

  // const incrementCountByFive = useCallback(() => {
  //   setCount2((prevCount) => prevCount + 5);
  // }, []);

  // const isEvenOrOdd = useMemo(() => {
  //   let i = 0;
  //   while (i < 1000000000) i += 1; // costly operation
  //   return count1 % 2 === 0;
  // }, [count1]);

  // state = {
  //   theme: "light",
  //   switchTheme: () => {
  //     this.setState((prevState) => ({
  //       theme: prevState.theme === "dark" ? "light" : "dark",
  //     }));
  //   },
  // };

  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={about} />
        </Switch>
      </Router>

      {/* <Layout /> */}
      {/* <GetPostReducer /> */}
      {/* <div>Count: {count} </div>
      <counterContext.Provider value={{ dispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider> */}
      {/* <MultiReducer /> */}
      {/* <ReducerCouter /> */}
      {/* <Time /> */}
      {/* <Tittle />
      <ShowCount count={count1} title="counter1" />
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <Button handleClick={incrementCountByOne}>Increment by One</Button>
      <hr />
      <ShowCount count={count2} title="counter2" />
      <Button handleClick={incrementCountByFive}>Increment by Five</Button> */}

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
