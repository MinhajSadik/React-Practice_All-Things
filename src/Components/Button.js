import React from "react";

function Button({ handleClick, children }) {
  console.log(`rendering button ${children}...`);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
