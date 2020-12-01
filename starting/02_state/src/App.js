import logo from "./logo.svg";
import "./App.css";
import React from "react";

/* 
class App extends React.Component {
  constructor() {
    super()
    this.state = {
    birthYear: 1994,
    currentYear: new Date().getFullYear(),
    }

    this.increaseAge.bind(this)  
  }
}
*/

class App extends React.Component {
  state = {
    birthYear: 1994,
    currentYear: new Date().getFullYear(),
  };

  increaseAge() {
    this.setState({ currentYear: this.state.currentYear + 1 });
  }

  decreaseAge = () => {
    this.setState({ currentYear: this.state.currentYear - 1 });
  };

  render() {
    const isCurrentYear = new Date().getFullYear() === this.state.currentYear;
    // console.log("isCurrentYear:", isCurrentYear);

    return (
      <div className="App">
        <H1
          currentYear={this.state.currentYear}
          birthYear={this.state.birthYear}
          // isCurrentYear={isCurrentYear}
        />
        <button onClick={this.increaseAge}>Increase age</button>
        <button onClick={this.decreaseAge}>Decrease the age</button>
      </div>
    );
  }
}

function H1(props) {
  const currentYear = new Date().getFullYear(); // 2020
  if (props.currentYear < props.birthYear) {
    return <h1>I wasn't even born</h1>;
  }
  if (props.currentYear < currentYear) {
    return (
      <h1>
        In {props.currentYear} I was {props.currentYear - props.birthYear}
      </h1>
    );
  }
  if (props.currentYear > currentYear) {
    return (
      <h1>
        In {props.currentYear} I will be {props.currentYear - props.birthYear}{" "}
        years old
      </h1>
    );
  }

  return (
    <h1>
      It's {props.currentYear} and I am {props.currentYear - props.birthYear}{" "}
      years old
    </h1>
  );
}

export default App;
