import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import UpdatingState from "./components/UpdatingState";
import CoolComponent from "./components/CoolComponent";

class App extends Component {
  state = {
    birthYear: 1994,
    // this code will be updated on every render
    currentYear: new Date().getFullYear(),
  };

  simulateYearPassing = () => {
    this.setState({ currentYear: this.state.currentYear + 1 });
  };

  render() {
    const isCurrentYear =
      this.state.currentYear === new Date().getFullYear()
        ? "I am "
        : `In the year of ${this.state.currentYear} I will be `;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>
          {isCurrentYear} {this.state.currentYear - this.state.birthYear}
        </h1>

        <h4>Move one year ahead</h4>
        <button onClick={this.simulateYearPassing}>Pass one year</button>
        <hr />
        <div style={{ height: "80vh", backgroundColor: "yellow" }}></div>
        <UpdatingState />

        <div style={{ height: "80vh", backgroundColor: "lightBlue" }}></div>

        <CoolComponent />
      </div>
    );
  }
}

export default App;
