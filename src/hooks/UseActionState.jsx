/** @format */

import React, { useActionState } from "react";

export function UseActionState(props) {
  const handleClick = async (previousState, formData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    console.log("name===>", username, password);
  };

  const [state, formAction, isPending] = useActionState(handleClick, undefined);
  console.log("state===>", state);
  return (
    <>
      <h2> {"Hello useActionState"}</h2>
      <form action={formAction}>
        <input type="text" name={"username"} placeholder="username..." />
        <br></br>
        <br></br>
        <input type="text" name={"password"} placeholder="password..." />
        <br></br>
        <br></br>
        <button disabled={isPending}>{"submit"}</button>
        {state}
      </form>
    </>
  );
}
