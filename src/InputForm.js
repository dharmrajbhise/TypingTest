import React, { useState } from "react";

export default function InputForm() {
  const [name, setName] = useState(" ");
  const [age, setAge] = useState(" ");
  const [tnc, setTnc] = useState(" ");

  function getdata(e) {
    console.log(name, age, tnc);
    e.preventDefault();
  }
  return (
    <div>
      <form>
        Name:
        <input
          type={"text"}
          placeholder="enter name"
          name={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        Age:
        <select name={age} onChange={(e) => setAge(e.target.value)}>
          <option>below 10</option>
          <option>below 18</option>
          <option>Gerater than 18</option>
        </select>
        <br></br>
        <br></br>
        <input
          type={"checkbox"}
          name={tnc}
          onChange={(e) => setTnc(e.target.checked)}
        ></input>
        Accept Terms and conditions
        <br></br>
        <br></br>
        <button onClick={getdata}>Submit</button>
      </form>
    </div>
  );
}
