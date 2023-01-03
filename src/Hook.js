import React, { useState } from "react";

export default function Hook(){

        const [count,setcount] = useState(0);
    return <div>
        <h1>State in Function{count}</h1>
        <button onClick={()=>{setcount(count+1)}} >Increment</button>
    </div>
}