import React from "react";

export default function PropsWithFc(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>Age:{props.Age}</h3>
      <h3>Email:{props.Email}</h3>
    </div>
  );
}
