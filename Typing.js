import React, { useEffect, useRef, useState } from "react";
import randomwords from "random-words";
import { json } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Type.css";
const NUMB_OF_WORDS = 200;
const SECONDS = 60;

export default function Typing() {
  const [words, setWords] = useState([]);
  const [count, setcount] = useState(SECONDS);
  const [currInput, setcurrentInput] = useState("");
  const [currwordIndex, setcurrwordIndex] = useState(0);
  const [correctwords, setcorrectwords] = useState(0);
  const [Incorrectwords, setIncorrectwords] = useState(0);
  const [status, setStatus] = useState("waiting");
  const textInput = useRef(null);

  useEffect(() => {
    setWords(generatewords);
  }, []);

  useEffect(() => {
    if (status === "started") {
      textInput.current.focus();
    }
  }, [status]);

  function generatewords() {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomwords());
  }

  function start() {
    if (status === "finished") {
      setWords(generatewords());
      setcurrwordIndex(0);
      setcorrectwords(0);
      setIncorrectwords(0);
    }
    if (status !== "started") {
      setStatus("started");
      let interval = setInterval(() => {
        setcount((prevcount) => {
          if (prevcount === 0) {
            clearInterval(interval);
            setStatus("finished");
            setcurrentInput("");
            return SECONDS;
          } else {
            return prevcount - 1;
          }
        });
      }, 1000);
    }
  }

  function handleKeyDown({ keyCode }) {
    if (keyCode === 32) {
      checkMatch();
      setcurrentInput("");
      setcurrwordIndex(currwordIndex + 1);
    }
    console.log(keyCode);
  }

  function checkMatch() {
    const wordTocompare = words[currwordIndex];
    const doesItMatch = wordTocompare === currInput.trim();
    console.log(doesItMatch);
    if (doesItMatch) {
      setcorrectwords(correctwords + 1);
    } else {
      setIncorrectwords(Incorrectwords + 1);
    }
  }
  // const my_style = {
  //   width: "50rem",
  //   top: "50px",
  // };

  return (
    <div>
      <center>
        <div
          className="card"
          style={{
            width: "50rem",
            top: "50px",
            color: "#fff",
            backgroundColor: "#7B2869",
          }}
        >
          <h1>{count}</h1>
          <br />
          <input
            ref={textInput}
            disabled={status !== "started"}
            type={"text"}
            placeholder="start"
            onKeyDown={handleKeyDown}
            value={currInput}
            onChange={(e) => setcurrentInput(e.target.value)}
          ></input>
          <div className="card-body">
            <h5 className="card-title">Start Typing...</h5>
            <p className="card-text">
              {status === "started" &&
                words.map((word, i) => (
                  <>
                    <span>{word}</span>
                    <span> </span>
                  </>
                ))}
            </p>
            {status === "finished" && (
              <>
                <div class="container text-center">
                  <div class="row align-items-start">
                    <div class="col">
                      <h1>Words Per Minute:</h1>
                      <h1>{correctwords}</h1>
                    </div>
                    <div class="col">
                      <h1>Accuracy:</h1>
                      <h1>
                        {Math.round(
                          (correctwords / (correctwords + Incorrectwords)) * 100
                        )}
                        %
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            )}
            <button type="button" className="btn btn-success" onClick={start}>
              Start
            </button>
          </div>
        </div>
      </center>

      {/* <h1>{count}</h1> */}
      {/* <br />
      <input
        ref={textInput}
        disabled={status !== "started"}
        type={"text"}
        placeholder="start"
        onKeyDown={handleKeyDown}
        value={currInput}
        onChange={(e) => setcurrentInput(e.target.value)}
      ></input>
      <br />
      <br />
      <button type="button" class="btn btn-success" onClick={start}>
        Start
      </button>
      <br />
      {/* {words.map((word, i) => {
        <>
          <span key={i}>
            {word.split(" ").map((char, idx) => (
              <span key={idx}>{char}</span>
            ))}
          </span>
          <span> </span>
        </>;
      })} */}
      {/* {JSON.stringify(words)} */}
      {/* {status === "started" &&
        words.map((word, i) => (
          <>
            <span>{word}</span>
            <span> </span>
          </>
        ))}
      <br />
      <br /> */}
      {/* {status === "finished" && (
        <>
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <h1>Words Per Minute:</h1>
                <h1>{correctwords}</h1>
              </div>
              <div class="col">
                <h1>Accuracy:</h1>
                <h1>
                  {Math.round(
                    (correctwords / (correctwords + Incorrectwords)) * 100
                  )}
                  %
                </h1>
              </div>
            </div>
          </div>
        </>
      )} */}
    </div>
  );
}
