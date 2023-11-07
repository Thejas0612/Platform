import React from "react";
import { PaBreadcrumbs } from "@emerson/dynamic-ui";
const BreadCrumbs = (props) => {
  const BreadCrumbsProps = {
    data: [],
    selected: "Pressure Measurement"
  };
  return (
    <>
      <PaBreadcrumbs {...BreadCrumbsProps} />
    </>
  );
};

export default BreadCrumbs;
