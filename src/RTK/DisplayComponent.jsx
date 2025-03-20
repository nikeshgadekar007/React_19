/** @format */

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export function DisplayComponent(props) {
  return (
    <>
      <ListGroup as="ol">
        <ListGroup.Item className="d-flex justify-content-between align-items-start">
          {props.title}
        </ListGroup.Item>
      </ListGroup>
      <br />
    </>
  );
}
