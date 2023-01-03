import React, { Component } from 'react';
import './custom.css';

export default class Style extends Component {

  render(){
    return (
      <div>
        <h1 className='header'>Hello React</h1>
        <h1 style={{backgroundColor : 'red',color : '#fff',border : '2px solid black',borderStyle : 'dashed'}}>Hello world</h1>
      </div>
    )
  }
}
