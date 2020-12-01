import React, { Component } from "react";

export default class ProjectData extends React.Component {
  render() {
    let addOrdinal = "th";
    if (this.props.order === 1) {
      addOrdinal = "st";
    } else if (this.props.order === 2) {
      addOrdinal = "nd";
    } else if (this.props.order === 3) {
      addOrdinal = "rd";
    }

    const successMessage = this.props.isSuccessful
      ? "OBVZ"
      : "And I learned a lot, but could have done better";
    return (
      <div>
        <h3>Report</h3>
        <h6>Project type: {this.props.projectType}</h6>
        <p>
          I spent {this.props.hoursSpent} in my {this.props.order}
          {addOrdinal}. Was I tremendously successful? {successMessage}
        </p>
      </div>
    );
  }
}
