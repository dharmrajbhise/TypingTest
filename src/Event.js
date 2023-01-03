import React from "react";

export default class Event extends React.Component{

    big(x){
        x.style.color = "yellow";
    }

    small(x){
        x.style.color = "Black"
    }




    Dance(){
        alert("Dancing");
    }

    render(){

        return <div>
            <h1 onFocus={()=>{this.big(this)}}>Event Handlling</h1>
            <button onClick={()=>{this.Dance()}}>Click here</button>
        </div>
    }
}