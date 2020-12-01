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
        {/* here , once again, we pointing the onClick to the method definition and NOT calling the function directly */}
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
