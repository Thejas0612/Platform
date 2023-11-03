import React from "react";
import { SortTable } from "@emerson/dynamic-ui";
const SortTable = (props) => {
  const SortTableProps = {
    data: [],
    label: "",
    showLabel: true,
    selectable: true,
    sort: true,
    sortInternal: true,
    selectedId: "",
    subLabel: "",
    multiselect: false,
    selectedIds: [],
    onChange: () => {},
    onSortChange: (noRefCheck = () => {}),
    subLabelClass: "",
    dataSourceUrl: ""
  };
  return (
    <>
      <SortTable multiselect {...SortTableProps} />
    </>
  );
};

export default SortTable;
