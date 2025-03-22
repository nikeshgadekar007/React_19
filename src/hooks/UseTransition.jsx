import React, { useTransition } from "react";
import Button from "react-bootstrap/Button";

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
