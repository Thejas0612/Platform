import React from "react";
const DataTable = (props) => {
  const DataTableProps = {
    data: [],
    label: "",
    size: "",
    labelClass: "",
    showLabel: "",
    defaultOrder: "asc",
    defaultOrderBy: "",
    dataSourceUrl: ""
  };
  return (
    <>
      <DataTable {...DataTableProps} />
    </>
  );
};

export default DataTable;
