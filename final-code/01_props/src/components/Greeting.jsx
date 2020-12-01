import React from "react";

function Greeting(props) {
  // you will see often also function Greeting({user}) {
  const myAge = props.user.isTruthyInAge
    ? "."
    : ", but I wouldn't trust myself, just saying";
  //  ☝️ in here you are literally checking a property in the user object -> the `isTruthyInAge` and depending on what its written there, it will change the string

  return (
    <h1>
      Hey there, I am {props.user.username} and I am {props.user.age}
      {myAge}
    </h1>
  );
}

export default Greeting;
