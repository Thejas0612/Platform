import React from "react";
import { SelectInput } from "@emerson/dynamic-ui";
const SelectInput = (props) => {
  const SelectInputProps = {
    label: "",
    labelClass: "",
    name: "",
    inputClass: "",
    labelClass: "",
    placeholder: "",
    value: "",
    onChange: () => {},
    options: [],
    dataSource: "",
    error: "",
    errorClass: "",
    wrapperId: "",
    wrapperClass: ""
  };
  return (
    <>
      <SelectInput {...SelectInputProps} />
    </>
  );
};

export default SelectInput;
