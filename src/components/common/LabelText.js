import React from "react";
import { LabelText } from "@emerson/dynamic-ui";
const LabelText = (props) => {
  const LabelTextProps = {
    label: "",
    showLabel:"",
    textStyle:"",
    labelClass: "ddl-from-custom-label",
    subText: "",
    text: "",
    textClass: "ddl-typography--h5"
  };
  return (
    <>
      <LabelText showLabel {...LabelTextProps} />
    </>
  );
};

export default LabelText;
