import { useDeferredValue, useEffect, useState } from "react";

import Search from "./Search";

// The `useDeferredValue` hook in React allows you to postpone updating a component of the UI. 
// This can be beneficial for boosting performance when rendering a specific section of the UI is expensive, or when you wish to prioritize rendering other parts of the UI

const UseDeferredValue = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div style={{ margin: "5rem" }}>
      <div className="tutorial">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <Search text={deferredQuery} />
      </div>
    </div>
  );
};

export default UseDeferredValue;
