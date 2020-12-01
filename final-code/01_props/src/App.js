import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import ClassButton from "./components/ClassButton";
import Greeting from "./components/Greeting";
import ProjectData from "./components/ProjectData";

function App() {
  const user = {
    username: "itstheandre",
    age: 84,
    isTruthyInAge: false,
  };

  const firstProject = {
    type: "game",
    hoursSpent: 10467,
    isSuccessful: true,
    order: 1,
  };
  return (
    <div>
      <h1>This is my button, v1</h1>
      <br />
      {/* Here we are hardcoding the prop of color - which will happen quite often in some props, but this data cna also be dynamic. We will see it more whenever we deal with APIs with react  */}
      <Button color="red" />
      <h1>This is my button, v2</h1>
      <br />
      <Button color="green" />
      <h1>This is my button, v3</h1>
      <br />
      <ClassButton color="green" />
      <div style={{ height: "50vh", backgroundColor: "red" }} />
      <Greeting user={user} />
      {/* <ProjectData project={firstProject} /> */}
      {/* this version wouldnt work perfectly because the name of the property in firstProject is not the same as what is in the ProjectData component */}
      <ProjectData {...firstProject} />
      <ProjectData
        order={firstProject.order}
        hoursSpent={firstProject.hoursSpent}
        isSuccessful={firstProject.isSuccessful}
        projectType={firstProject.type}
      />
    </div>
  );
}

export default App;
