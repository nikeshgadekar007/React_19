/** @format */

import React from "react";
import withData from "./WithData";

export function UserList(props) {
  if (!props.data) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {props.data.splice(10, 10).map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </ul>
  );
}

export default withData(UserList, () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
);
