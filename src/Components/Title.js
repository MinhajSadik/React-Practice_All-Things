import React from "react";

function Title() {
  console.log(`rendering Title...`);
  return <div>useCallback Hook Learning</div>;
}

export default React.memo(Title);
