import React from "react";
import { ImageButtonInput } from "@emerson/dynamic-ui";
const ImageInputButton = (props) => {
  const ImageButtonProps = {
    label: "",
    title: "",
    defaultId: "",
    onChange: () => {},
    options: [],
    wrapperClass: "",
    wrapperId: "",
    required: false,
    showLabel: true,
    labelClass: "",
    isBracket: true,
    dataSourceUrl: "",
    error: "",
    errorClass: ""
  };
  return (
    <>
      <ImageButtonInput {...ImageButtonProps} />
    </>
  );
};

export default ImageInputButton;
