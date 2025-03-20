/** @format */

import React, { useEffect, useState, useRef } from "react";

const PollingComponent = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [polling, setPolling] = useState(true);
  const [postId, setPostId] = useState(1);
  const intervalRef = useRef(null);

  const fetchOrderStatus = async (postId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await response.json();
      console.log("data===>", data[0]);
      if (data[0].postId === 3) {
        setOrderStatus("Order created successfully");
        setPolling(false); // Stop polling if order is created
      } else {
        setOrderStatus("Order not created yet");
      }
    } catch (error) {
      console.error("Error fetching order status:", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    if (postId === 1) {
      fetchOrderStatus(postId);
    }

    // Set up polling interval
    intervalRef.current = setInterval(() => {
      setPostId((prevPostId) => {
        const newPostId = prevPostId + 1;
        fetchOrderStatus(newPostId);
        return newPostId;
      });
    }, 10000); // 10000 ms = 10 Sec

    // Clean up interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!polling) {
      clearInterval(intervalRef.current);
    }
  }, [polling]);

  return (
    <div>
      <h1>Order Status</h1>
      <p>{orderStatus}</p>
    </div>
  );
};

export default PollingComponent;
