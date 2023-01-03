import React, { useState } from "react";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userError, setuserError] = useState(false);
  const [passError, setError] = useState(false);
  function login(e) {
    e.preventDefault();
  }

  function user(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setuserError(true);
    } else {
      setuserError(false);
    }
    // console.warn(e.target.value.length);
  }

  function pass(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setError(true);
    } else {
      setError(false);
    }
    // console.warn(e.target.value.length);
  }
  return (
    <div>
      <h1>Login</h1>
      <br />
      Username :
      <input
        type={"text"}
        name={username}
        placeholder="enter username"
        onChange={user}
      ></input>
      <br />
      {userError ? <span>Length should be greater than 3</span> : ""}
      <br />
      Password :
      <input
        type={"password"}
        name={password}
        placeholder="enter password"
        onChange={pass}
      ></input>
      <br />
      {passError ? <span>length should be greater than 8</span> : " "}
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}
