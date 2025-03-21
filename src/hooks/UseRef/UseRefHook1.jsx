/** @format */
import React, { useState, useRef } from "react";

// So basically useRef is not made for component render, that is why when we increse the counter it will
// instantly change the value in increment but can not access in return because it will not rerender the componnet

function UseRefHook1() {
  const [counter, setCounter] = useState(0);
  const inputRef = useRef(0);

  const clickHandler = () => {
    setCounter(counter + 1);
    inputRef.current++;
    console.log("counter===>", counter)
    console.log("inputRef===>", inputRef.current)
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <br />
      <button onClick={clickHandler}>Increment</button>
    </div>
  );
}

export default UseRefHook1;
