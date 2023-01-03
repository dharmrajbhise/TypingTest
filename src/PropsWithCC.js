import React, { Component } from "react";

export default class PropsWithCC extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>Age:{this.props.Age}</h3>
        <h4>Email:{this.props.Email}</h4>
      </div>
    );
  }
}
