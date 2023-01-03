import React, { useState } from "react";

export default function Hide_show() {
  const [status, setStatus] = useState(true);

  return (
    <div>
      {status ? <h1>Hello suddu..</h1> : null}
      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>show</button>
    </div>
  );
}
