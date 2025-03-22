import React from 'react';
import GridExample from "../GridExample";

const DetailCellRenderer = () => (
    <div role="gridcell"  style={{ padding: '20px' }}>
        <GridExample />
    </div>
);

export default DetailCellRenderer;