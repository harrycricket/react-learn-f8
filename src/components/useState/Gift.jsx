import React, { useState } from "react";

export default function Gift() {
  const gifts = [
    "Samsung",
    "Redme",
    "Xiaomi",
    "Iphone 14",
    "MacBook",
    "AirPods",
  ];
  const [gift, setGift] = useState();

  const handleTakeGift = () => {
    setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  };
  console.log(gift);
  return (
    <div style={{ padding: "3rem" }}>
      {gift ? <h1>Your gift: {gift}</h1> : <h1>No gift</h1>}
      <button onClick={handleTakeGift} style={{ padding: "5px" }}>
        Take a gift
      </button>
    </div>
  );
}
