/** @format */

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export function DisplayComponent(props) {
  console.log("props===>", props);
  return (
    <>
      <ListGroup as="ol">
        <ListGroup.Item className="d-flex justify-content-between align-items-start">
          {props.name}
        </ListGroup.Item>
      </ListGroup>
      <br />
    </>
  );
}
