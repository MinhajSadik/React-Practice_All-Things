import { useCallback, useEffect, useState } from "react";

const useWindowWidth = (screenSize) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth < screenSize);
  }, [screenSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return width;
};

export default useWindowWidth;
