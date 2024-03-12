import React from "react";
import { Header } from "@emerson/dynamic-ui";
import PageHeaderSchema from "./../../JsonSchema/PageHeaderSchema";

const PageHeader = () => {
  return (
      <Header {...PageHeaderSchema} />
  );
};

export default PageHeader;
