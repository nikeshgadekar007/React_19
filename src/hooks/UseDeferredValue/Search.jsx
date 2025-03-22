// Search.js

import React from "react";

const SlowList = React.memo(({ text }) => {
  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

const SlowItem = ({ text }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}

  return <li className="item">Search Result: {text}</li>;
};

export default SlowList;
