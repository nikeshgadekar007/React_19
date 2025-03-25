import React, { useTransition } from "react";
import Button from "react-bootstrap/Button";

// useTransition is a React Hook that lets you render a part of the UI in the background.

function UseTransition() {
  const [pending, setPending] = useTransition();

  const handleClick = async () => {
    setPending(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };

  return (
    <div>
      <Button variant="primary" disabled={pending} onClick={handleClick}>
        {"Click me !"}
      </Button>
    </div>
  );
}

export default UseTransition;
