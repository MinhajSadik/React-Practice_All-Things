import useWindowWidth from "./Hooks/useWindowWidth";

export default function Layout() {
  const onSmallScreen = useWindowWidth(600);
  return (
    <div>
      <h1>You're Using {onSmallScreen ? "Small" : "Large"} Screen</h1>
    </div>
  );
}
