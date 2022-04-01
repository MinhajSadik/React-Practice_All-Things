import React, { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("There was a fetching problem");
      });
  }, []);
  return (
    <div>
      <h1>Get Post useState Example</h1>
      <p>{loading ? "Loading..." : post.title}</p>
      <p>{error || null}</p>
    </div>
  );
}
