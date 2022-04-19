import React from "react";

export default function posts({ match }) {
  const { id } = match.params;
  return <div>this is the post page - {id}</div>;
}
