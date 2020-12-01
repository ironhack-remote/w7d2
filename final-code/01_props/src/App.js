import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import ClassButton from "./components/ClassButton";

function App() {
  return (
    <div>
      <h1>This is my button, v1</h1>
      <br />
      <Button color="red" />
      <h1>This is my button, v2</h1>
      <br />
      <Button color="green" />
      <h1>This is my button, v3</h1>
      <br />
      <ClassButton color="green" />
    </div>
  );
}

export default App;
