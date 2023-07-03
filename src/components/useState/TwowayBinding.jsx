import React, { useState } from "react";

export default function TwowayBinding() {
  const [name, setName] = useState("");
  console.log(name);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div style={{ padding: "2rem" }}>
      <input onChange={handleChange} value={name} />
      <h1>{name}</h1>
      <button onClick={() => setName("Harry")}>Change</button>
    </div>
  );
}
