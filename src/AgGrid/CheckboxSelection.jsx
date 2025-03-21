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
import { createGrid, themeQuartz } from "ag-grid-community";

const myTheme = themeQuartz.withParams({
  /* bright green, 10% opacity */
  selectedRowBackgroundColor: "rgba(0, 255, 0, 0.1)",
});

const CheckboxSelection = () => {
  const containerStyle = useMemo(
    () => ({ width: "1500px", height: "1000px" }),
    []
  );
  const gridStyle = useMemo(() => ({ height: "1000px", width: "1500px" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "athlete", minWidth: 170 },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ]);
  const theme = useMemo(() => {
    return myTheme;
  }, []);
  const rowSelection = useMemo(() => {
    return { mode: "multiRow" };
  }, []);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      filter: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    params.api.forEachNode((node) => {
      if (node.rowIndex === 2 || node.rowIndex === 3 || node.rowIndex === 4) {
        node.setSelected(true);
      }
    });
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          theme={theme}
          rowSelection={rowSelection}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          onFirstDataRendered={onFirstDataRendered}
        />
      </div>
    </div>
  );
};

export default CheckboxSelection;
