import React, { useState } from "react";

export default function Increase() {
  const totalPrice = [100, 200, 300];

  const [counter, setCounter] = useState(() => {
    return totalPrice.reduce((total, current) => total + current);
  });
  const handleIncrease = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </>
  );
}
