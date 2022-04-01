import { useEffect, useReducer } from "react";
const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "There was a fetching problem",
      };
    default:
      return state;
  }
};

export default function GetPostReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <p>{state.loading ? "Loading..." : state.post.title}</p>
      <p>{state.error || null}</p>
    </div>
  );
}
