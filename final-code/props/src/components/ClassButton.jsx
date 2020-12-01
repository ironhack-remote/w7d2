import React from "react";

export default class WithProps extends React.Component {
  render() {
    const buttonStyle = {
      color: this.props.color,
      borderStyle: this.props.color === "red" ? "dotted" : "solid",
      borderWidth: this.props.color === "green" ? "1px" : "3px",
    };

    return (
      <button style={buttonStyle}>
        This is my button, but the styles change a lot
      </button>
    );
  }
}
