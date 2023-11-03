import React from "react";
import { CustomTop } from "@emerson/dynamic-ui";

const CustomTopSection = (props) => {
  const CustomTopProps = {
    data: [],
    labelClass: "ddl-typography--paragraph",
    labelStyle: "",
    name: "",
    order: 0,
    type: "BREAD_CRUMBS",
    value: ""
  };
  return (
    <>
      <CustomTop {...CustomTopProps} />
    </>
  );
};

export default CustomTopSection;
