import useWindowWidth from "./Hooks/useWindowWidth";

export default function LayoutTwo() {
  const onSmallScreen = useWindowWidth(700);
  return (
    <div className={onSmallScreen ? "Small" : "Large"}>
      <h1>This is another Component</h1>
    </div>
  );
}
