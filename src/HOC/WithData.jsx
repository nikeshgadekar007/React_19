/** @format */

import React, { useEffect, useState } from "react";

function withData(WrappedComponent, fetchData) {
  return function EnhancedComponent(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
      setTimeout(() => {
        fetchData().then(setData);
      }, 2000);
    }, [fetchData]);

    return <WrappedComponent {...props} data={data} />;
  };
}

export default withData;
