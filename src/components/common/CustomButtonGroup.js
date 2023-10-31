import React from "react";
import { CustomButtonGroup } from "@emerson/dynamic-ui";
function CustomButtonGroup() {
  return (
    <>
      <CustomButtonGroup
        data={[]}
        defaultIds={["1"]}
        label="MultiCustomButtonGroup"
        labelClass="ddl-from-custom-label"
        multiple
        onChange={() => {}}
      />
    </>
  );
}

export default CustomButtonGroup;
