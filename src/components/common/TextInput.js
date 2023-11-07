import React from "react";
import { TextInput } from "@emerson/dynamic-ui";
const TextInput = (props) => {
  const TextInputProps = {
    label: "",
    title: "",
    type: "",
    name: "",
    value: "",
    placeholder: "",
    error: "",
    onChange: () => {},
    onBlur: () => {},
    wrapperClass: "",
    WrapperId: "",
    inputClass: "",
    labelClass: "",
    errorClass: "",
    onKeyPress: () => {},
    disabled: false,
    autofocus: true,
    maxLength: 5
  };
  return (
    <>
      <TextInput {...TextInputProps} />
    </>
  );
};

export default TextInput;
