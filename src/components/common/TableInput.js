import React from "react";
import { TableInput } from "@emerson/dynamic-ui";
const TableInput = (props) => {
  const TableInputProps = {
    data: [],
    title: "",
    label: "",
    value: {},
    showLabel:true,
    onChange: () => {},
    containerClass: "",
    labelClass: "",
    tableClass: "",
    dataSourceUrl: ""
  };
  return (
    <>
      <TableInput {...TableInputProps} />
    </>
  );
};

export default TableInput;
