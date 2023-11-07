import React from "react";
import { SuggestionCard } from "@emerson/dynamic-ui";
const SuggestionCard = (props) => {
  const SuggestionCardProps = {
    data: [],
    label: "",
    labelClass: "",
    showLabel: "",
    dataSourceUrl: "",
    sort: true,
    onChange: () => {},
    onSort: (noRefCheck = () => {}),
    sortOptions: []
  };
  return (
    <>
      <SuggestionCard {...SuggestionCardProps} />
    </>
  );
};

export default SuggestionCard;
