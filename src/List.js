import React, { Component } from 'react'

export default class List extends Component {

    constructor() {
      super();
    
      this.state = {

         List : [
            {Name : "Dharmraj",Mobile : "9834151327",Email : "bhisedharmraj04@gmail.com"},
            {Name : "Kishor",Mobile : "7728440132",Email : "bhiseKishor04@gmail.com"},
            {Name : "Sudarshan",Mobile : "9823275285",Email : "bhisesudarshan04@gmail.com"}
         ]
      }
    }
    
  render() {
    return (
      <div>
        <h1>List</h1>
        {this.state.List.map((item)=>
        
        <h3>Name : <span>{item.Name}</span><br></br>Email: <span>{item.Email}</span><br></br>Mobile : <span>{item.Mobile}</span></h3>,
        )
    }
      </div>
    );
  }
}
