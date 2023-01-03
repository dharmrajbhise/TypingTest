import React, { Component } from "react";

function Geeky(prop){
    const red=() => {
        alert("This is functional Component")
    }
    return <div>
        <h1 onClick={red}>
            {prop.text}
        </h1>
    </div>
}
export default Geeky;