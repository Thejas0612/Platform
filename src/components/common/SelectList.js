import React from "react";
import { SelectList } from "@emerson/dynamic-ui";
const SelectList = (props) => {
  const SelectListProps = {
    columns: [],
    rows: [],
    title: "",
    label: "",
    labelClass:"",
    value:"",
    placeholder: "",
    onChange: () => {},
    options:[],
    showLabel:"",
    dataSourceUrl:"",
    error:"",
    errorClass:""
  };
  return (
    <>
      <SelectList {...SelectListProps} />
    </>
  );
};

export default SelectList;
