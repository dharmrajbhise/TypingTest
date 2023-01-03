import React, { useState } from "react";

export default function Onchange() {
  const [data, setdata] = useState(null);

  function update(x) {
    setdata(x.target.value);
  }
  return (
    <div>
      <h1>{data}</h1>
      <input type="text" name="enter" onChange={update}></input>
    </div>
  );
}
