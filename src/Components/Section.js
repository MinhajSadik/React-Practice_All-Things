import React from "react";
import Content from "./Content";

class Section extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("Section reRendered");
    return (
      <div>
        <h1>This is a Section</h1>
        <Content />
      </div>
    );
  }
}

export default Section;
