import React from "react";
import { ItemsTable } from "@emerson/dynamic-ui";
const ItemTable = (props) => {
  const ItemsTableProps = {
    data: [],
    isPrint: true,
    isDownload: true,
    labelClass: "",
    label: "",
    showLabel: "",
    onChange: () => {},
    dataSourceUrl: ""
  };
  return (
    <>
      <ItemsTable {...ItemsTableProps} />
    </>
  );
};

export default ItemTable;
