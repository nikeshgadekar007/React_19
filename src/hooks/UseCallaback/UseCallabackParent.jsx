// UseCallabackParent.jsx

// https://semaphore.io/blog/react-usecallback-hook

import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Display from "./Display";

const UseCallabackParent = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(30);

  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);

  // const incrementAge = () => {
  //   setAge(age + 5);
  // };

  // const incrementSalary = () => {
  //   setSalary(salary + 100);
  // };

  return (
    <div>
      <Title />
      <Display text="age" displayvalue={age} />
      <Button handleClick={incrementAge}>Update Age</Button>
      <Display text="salary" displayvalue={salary} />
      <Button handleClick={incrementSalary}>Update Salary</Button>
    </div>
  );
};

export default UseCallabackParent;


// const globalScope = 'Nikesh';
// (function outerFn(outerFnArg) {
//   const outerVar = 'a';
//   (function innerFn(innerFnArg) {
//     const innerFnVar = 'b';
//      console.log('globalScope var:', globalScope);
//     console.log('outer function Arg:', outerFnArg);
//     console.log('outer function Var:', outerVar);
//     console.log('inner function Arg:', innerFnArg);
//     console.log('inner function Var:', innerFnVar);
//   })(50);
// })(10);

