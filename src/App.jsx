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
import UseRefHook1 from "./hooks/UseRef/UseRefHook1";
import UseRefHook2 from "./hooks/UseRef/UseRefHook2";
import GridExample from "./AgGrid/GridExample";
import CheckboxSelection from "./AgGrid/CheckboxSelection";
import ColumnGroups from "./AgGrid/ColumnGroups";
import Pagination from "./AgGrid/Pagination";
import RowDragging from "./AgGrid/RowDragging";
import GridToGridDrag from "./AgGrid/GridToGridDrag";
import RowGrouping from "./AgGrid/RowGrouping";
import MasterCustomDetails from "./AgGrid/MasterDetail/MasterCustomDetails";
import UseCallabackParent from "./hooks/UseCallaback/UseCallabackParent";
import UseDeferredValue from "./hooks/UseDeferredValue/UseDeferredValue";
import UseTransition from './hooks/UseTransition'
import VirtualDom from "./VirtualDom";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const gridArra = [
  <GridExample />,
  <CheckboxSelection />,
  <ColumnGroups />,
  <Pagination />,
  <RowDragging />,
  <GridToGridDrag />,
  <RowGrouping />,
  <MasterCustomDetails />
];

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <UseActionState /> */}
        {/* <UserList /> */}
        {/* <PaginatedDisplay /> */}
        {/* <InfiniteScrollDisplay /> */}
        {/* <PollingComponent /> */}
        {/* <Main /> */}
        {/* <UseRefHook1 /> */}
        {/* <UseCallabackParent/> */}
        {/* <VirtualDom /> */}
        {/* <UseDeferredValue /> */}
        {/* <UseTransition /> */}
        {/* {gridArra[7]} */}
      </QueryClientProvider>
    </>
  );
}

export default App;
