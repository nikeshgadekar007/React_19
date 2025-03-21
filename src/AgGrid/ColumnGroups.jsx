"use client";

import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import {
  createGrid,
} from "ag-grid-community";

const ColumnGroups = () => {
  const containerStyle = useMemo(() => ({ width: "1000px", height: "1000px" }), []);
  const gridStyle = useMemo(() => ({ height: "1000px", width: "1000px" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Name & Country",
      children: [{ field: "athlete" }, { field: "country" }],
    },
    {
      headerName: "Sports Results",
      children: [
        { columnGroupShow: "closed", field: "total" },
        { columnGroupShow: "open", field: "gold" },
        { columnGroupShow: "open", field: "silver" },
        { columnGroupShow: "open", field: "bronze" },
      ],
    },
  ]);

  const onGridReady = useCallback((params) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default ColumnGroups;