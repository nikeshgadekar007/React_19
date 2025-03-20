/** @format */

import { useState } from "react";
import "./App.css";
import { UseActionState } from "./hooks/UseActionState";
import UserList from "./HOC/UserList";
import PaginatedDisplay from "./hooks/UseInfiniteQuery";
import InfiniteScrollDisplay from "./hooks/InfiniteScroll";
import PollingComponent from "./hooks/PollingCompo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <UseActionState /> */}
      {/* <UserList /> */}
      <QueryClientProvider client={queryClient}>
        {/* <PaginatedDisplay /> */}
        {/* <InfiniteScrollDisplay /> */}
        <PollingComponent />
      </QueryClientProvider>
    </>
  );
}

export default App;
