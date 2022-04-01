import { useEffect, useState } from "react";

export default function Layout() {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setOnSmallScreen(window.innerWidth < 760);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <div>
      <h1>You're Using {onSmallScreen ? "Small" : "Large"} Screen</h1>
    </div>
  );
}
