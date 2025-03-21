/** @format */

import { useState } from "react";
import "./App.css";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { UseActionState } from "./hooks/UseActionState";
import UserList from "./HOC/UserList";
import PaginatedDisplay from "./hooks/UseInfiniteQuery";
import InfiniteScrollDisplay from "./hooks/InfiniteScroll";
import PollingComponent from "./hooks/PollingCompo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./RTK/Main";
import UseRefHook2 from "./hooks/UseRef/UseRefHook2";
import GridExample from "./AgGrid/GridExample";
import CheckboxSelection from "./AgGrid/CheckboxSelection";
import ColumnGroups from "./AgGrid/ColumnGroups";
import Pagination from "./AgGrid/Pagination";
import RowDragging from "./AgGrid/RowDragging";
import GridToGridDrag from "./AgGrid/GridToGridDrag";


// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const gridArra = [
  <GridExample />,
  <CheckboxSelection />,
  <ColumnGroups />,
  <Pagination />,
  <RowDragging />,
  <GridToGridDrag />
];

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <UseActionState /> */}
      {/* <UserList /> */}
      <QueryClientProvider client={queryClient}>
        {/* <PaginatedDisplay /> */}
        {/* <InfiniteScrollDisplay /> */}
        {/* <PollingComponent /> */}
        {/* <Main /> */}
        {/* <UseRefHook2 /> */}
        {/* <GridExample /> */}
        {/* <CheckboxSelection /> */}
        {/* <ColumnGroups /> */}
        {/* <Pagination /> */}
        {gridArra[5]}
      </QueryClientProvider>
    </>
  );
}

export default App;
