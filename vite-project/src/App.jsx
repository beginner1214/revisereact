import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [renderCount, setRenderCount] = useState(1);
  const isFirstRender = useRef(true);
  const value = useRef(1);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    value.current = value.current + 1;
    setRenderCount(value.current);
  }, [count]);
  return (
    <>
      <h2>App</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      {count}

      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
      <div>Renders: {renderCount}</div>
    </>
  );
}

export default App;
