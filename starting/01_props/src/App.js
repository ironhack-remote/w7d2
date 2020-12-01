import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
/*  */

// function App() {
//   return (
//     // <div>
//     <>
//       <div></div>
//       <h1></h1>
//       {/* // </div> */}
//     </>
//   );
// }

function App() {
  const user = {
    username: "itstheandre",
    age: 84,
    isTruthyInAge: false,
  };
  const user2 = {
    username: "filipe",
    age: 24,
    isTruthyInAge: true,
  };

  const book = {
    author: "Dan Brown",
    title: "The DeVinci Code",
    genre: "The puns are stuck in an infinite loop",
    condition: "Truthy",
  };
  return (
    <div className="App">
      <Nav user={user} />
      <WithChildren height="20vh">
        <div>Hello Marta</div>
      </WithChildren>
      <ShelfAssured
        condition={book.title}
        title={book.title}
        author={book.author}
        genre={book.genre}
      />
      <ShelfAssured
        {...book}
        // book={{ ...book }}
        // title={book.title}
      />

      {/* <img  />

<br /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button isButton={false} color="green" numbers={1} />
        <Button isButton={false} color="orange" numbers={1} username="marcel" />
        <div style={{ height: "50px" }}></div>
        <Button isButton={false} color="pink" numbers={1} />
        <Greeting user={user} />
        <Greeting word user={user2} />
        <WithChildren height="100vh">
          <h1>These are children</h1>
        </WithChildren>
      </header>
    </div>
  );
}

class ShelfAssured extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <h4>Title: {this.props.title}</h4>
        <h6>Author: {this.props.author}</h6>
        <p>Genre: {this.props.genre}</p>
        <p>Condition: {this.props.condition}</p>
      </div>
    );
  }
}

// function ShelfAssured(props) {
//   console.log("props:", props);
//   // const { author, title, genre, condition } = props;
//   return (
//     <div>
//       <h4>Title: {props.title}</h4>
//       <h6>Author: {props.author}</h6>
//       <p>Genre: {props.genre}</p>
//       <p>Condition: {props.condition}</p>
//     </div>
//   );
// }

function WithChildren({ children, height }) {
  // return null;
  return <nav style={{ height: height }}>{children}</nav>;
}

function Greeting({ user, word }) {
  console.log("word:", word);
  // console.log("props:", props);

  const ageInfo = user.isTruthyInAge
    ? "."
    : ", but I wouldn't trust myself. Just saying";
  return (
    <h1>
      Hey there I am {user.username} and I am {user.age} years old{ageInfo}
    </h1>
  );
}

function Nav(props) {
  // console.log(props);

  return <nav>Welcome back {props.user.username}</nav>;
}

function Button(props) {
  // console.log("props:", props);
  const buttonStyle = {
    backgroundColor: props.color,
    borderStyle: props.color === "pink" ? "solid" : "dashed",
    borderWidth: "5px",
  };
  return <button style={buttonStyle}>I am a button, {props.username}</button>;
}

export default App;
