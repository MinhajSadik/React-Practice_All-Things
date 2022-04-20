import React from "react";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const navigate = useNavigate();
  function goBack() {
    // navigate("/", {
    //   replace: true,
    // });
    navigate(-1);
  }
  return (
    <div>
      <p>this is the post page!</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
