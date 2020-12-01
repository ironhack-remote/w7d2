import { Component } from "react";
import ShowEmoji from "./ShowEmoji";

export default class UpdatingState extends Component {
  state = {
    clicked: 0,
  };

  increase = () => {
    // this.state.clicked++
    this.setState({ clicked: this.state.clicked + 1 });
  };

  render() {
    return (
      <div>
        <h1>This button has been clicked {this.state.clicked} times</h1>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
