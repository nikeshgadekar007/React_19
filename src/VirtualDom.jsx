import React from "react";

function VirtualDom() {
  return <div>VirtualDom</div>;
}

const virtualDom = <h1>Hello world</h1>;
const realDom = document.createElement("h1");
realDom.innerText = "Hello World";

console.log("virtualDom====>", VirtualDom());
console.log("realDom====>", realDom);

export default VirtualDom;
