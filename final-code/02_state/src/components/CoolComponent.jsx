import React from "react";
import ShowEmoji from "./ShowEmoji";

class CoolComponent extends React.Component {
  state = {
    isCool: false,
  };

  toggleCoolFactor = () => {
    this.setState({ isCool: !this.state.isCool });
  };

  render() {
    const amICool = this.state.isCool ? "" : " NOT";
    return (
      <div>
        <h1 onClick={this.toggleCoolFactor}>
          For sure that I am{amICool} cool
        </h1>

        <ShowEmoji isCool={this.state.isCool} />
      </div>
    );
  }
}

export default CoolComponent;
