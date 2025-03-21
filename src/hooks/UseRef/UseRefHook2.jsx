/** @format */
import React, { useEffect, useRef } from "react";

// So basically useRef is not made for component render, that is why when we increse the counter it will
// instantly change the value in increment but can not access in return because it will not rerender the componnet

function UseRefHook2() {
  const inputRef = useRef(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default UseRefHook2;
