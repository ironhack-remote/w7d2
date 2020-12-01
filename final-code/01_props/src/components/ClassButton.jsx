import React from "react";

// In class components you always access props as `this.props`

// render is the most important method in a class component. Its the one that tells react how to handle add the current component to the DOM
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
