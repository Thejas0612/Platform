import React from "react";
import { ProductsList } from "@emerson/dynamic-ui";
const ProductList = (peops) => {
  const ProductListProps = {
    data: [],
    filterOptions: [],
    sortOptions: [],
    label: "",
    labelClass: "",
    showLabel: true,
    description: "",
    showDescription: true,
    showSelect: true,
    sort: true,
    filter: true,
    onselect: () => {},
    onFilter: () => {},
    onSort: () => {},
    dataSourceUrl: ""
  };
  return (
    <>
      <ProductsList {...ProductListProps} />
    </>
  );
};

export default ProductList;
