import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((prev) => prev + 1);
  const decrement2 = () => setCount((prev) => prev - 1);

  // const reset = () => setCount((prev) => prev - prev);
  const reset = () => setCount(0);

  const double = () => setCount((prev) => prev * 2);

  const divide3 = () => {
    setCount((prev) => {
      const newPrev = prev;
      if (newPrev % 3 === 0) {
        return newPrev / 3;
      } else {
        return prev;
      }
    });
  };
  return (
    <>
      <div>
        <h1>this is a template for React App.</h1>
        <p>Count {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>

      <div>
        <button onClick={reset}>RESET</button>
        <button onClick={double}>*2</button>
        <button onClick={divide3}>divide3</button>
      </div>
    </>
  );
};

export default App;
