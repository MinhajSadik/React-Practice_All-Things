import React from "react";
import { useParams } from "react-router-dom";

export default function Posts() {
  const { category, topic } = useParams();
  // const history = useHistory();
  // console.log("history", history);
  return (
    <div>
      this is the post page - {category} / {topic}{" "}
      {/* <button onClick={() => history.goBack()}>Go Back</button> */}
    </div>
  );
}
