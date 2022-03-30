import React from "react";

export default function ShowCount({ count, title }) {
  console.log(`rendering ${title}...`);
  return (
    <div>
      {title} is {count}
    </div>
  );
}
