import React from "react";

class State extends React.Component{

    constructor(){

        super();
        this.state = {
            name : 'Dharmraj',
            email : 'bhisedharmraj04@gmail.com',
            count : 0

        }
    }

    update(){

        this.setState({
            name : 'Kishor',
            email : 'kishor05@gmail.com',
            count : this.state.count+1

            
        })
    }

    render(){
        return <div>
            <h1>
                Hello {this.state.name}
            </h1>
                <h1>Email:{this.state.email}</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{this.update()}}>Update Name</button>
        </div>
    }
}

export default State;