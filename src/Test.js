import React, { useState } from "react";

const Test = () => {
  const [name, setName] = useState("");

  const [user, setUser] = useState({ name: "Doe", age: 32 });
  //returns a state variavle and a function using which you can update the state value.
  //because we do not have setState function in functional components, Also it will take the
  // intial value of the state variable.

  //arrow function
  const updateState = () => {
    setName("Jhon");
  };

  const updateObject = () => {
    setUser((prevState) => ({
      ...prevState,
      age: 40,
    }));
  };
  return (
    <>
      <h1>Hooks - useState() </h1>
      <p> State variable name : {name} </p>
      <button onClick={updateState}>Click to update the state variable</button>
      <button onClick={() => setName("Ram")}> Click to update</button>

      <p>State as an object, name ={user.name}</p>
      <p>State as an object , age={user.age}</p>
      <button onClick={updateObject}>Click to update </button>
    </>
  );
};

export default Test;

//useState
//definition , structure
//how set the staet
