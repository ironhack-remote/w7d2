import logo from "./logo.svg";
import "./App.css";
/*  */
function App() {
  const user = {
    username: "vincenzo",
  };
  return (
    <div className="App">
      <Nav user={user} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button isButton={false} color="green" numbers={1} />
        <Button isButton={false} color="orange" numbers={1} username="marcel" />
        <div style={{ height: "50px" }}></div>
        <Button isButton={false} color="pink" numbers={1} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Nav(props) {
  console.log(props);

  return <nav>Welcome back {props.user.username}</nav>;
}

function Button(props) {
  console.log("props:", props);
  const buttonStyle = {
    backgroundColor: props.color,
    borderStyle: props.color === "pink" ? "solid" : "dashed",
    borderWidth: "5px",
  };
  return <button style={buttonStyle}>I am a button, {props.username}</button>;
}

export default App;
