import React, { Component } from "react";

class StateWithClass extends Component {
  constructor() {
    super();

    this.state = {
      data: " Dharmraj",
    };
  }
  update() {
    this.setState({ data: " Dharma" });
  }

  render() {
    return (
      <div>
        <h1>Hello{this.state.data}</h1>
        <button onClick={() => this.update()}>update</button>
      </div>
    );
  }
}

export default StateWithClass;
