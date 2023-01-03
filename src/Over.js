import React, { useState } from "react";

export default function Over() {
  const [data, setdata] = useState(0);
  function update() {
    setdata(data + 1);
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={update}>update</button>
    </div>
  );
}
