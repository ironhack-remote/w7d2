import React from "react";

export default function Button(props) {
  const buttonStyle = {
    color: props.color,
    borderStyle: props.color === "red" ? "dotted" : "solid",
    borderWidth: props.color === "green" ? "1px" : "3px",
  };
  return (
    <button style={buttonStyle}>
      This is my button, but the styles change a lot
    </button>
  );
}
