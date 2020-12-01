import React from "react";
import ShowEmoji from "./ShowEmoji";

class CoolComponent extends React.Component {
  state = {
    isCool: false,
  };

  toggleCoolFactor = () => {
    // this method toggles the isCool property. Takes the current value and turns it to its oposite value
    this.setState({ isCool: !this.state.isCool }, () => {
      console.log("INSIDE CALLBACK", this.state.isCool);
      // ☝️ this console log will show the most up to date version of `isCool`
    });
    // this console log `might` sometimes get the right value, but its not correct 👇

    console.log("OUTISDE OF CALLBACK", this.state.isCool); // its possible that it takes the previous value, because this.setState is asynchronous
  };

  render() {
    const amICool = this.state.isCool ? "" : " NOT";
    return (
      <div>
        {/* import to know we NEVER call the function directly on the onClick. We just point it to the function /method definition */}
        <h1 onClick={this.toggleCoolFactor}>
          For sure that I am{amICool} cool
        </h1>

        <ShowEmoji isCool={this.state.isCool} />
      </div>
    );
  }
}

export default CoolComponent;
