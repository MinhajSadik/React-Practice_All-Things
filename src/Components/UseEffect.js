import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
