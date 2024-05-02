import React from "react";
import PropTypes from "prop-types";
import { CardCheckbox } from "./CardCheckbox";
import { FormHelperText, Grid } from "@mui/material";
import { MsolComponentHighlighter } from "../msol-component-highlighter/MsolComponentHighlighter";

export const CardCheckboxGroup = ({
  comparedIds = [],
  selectedId,
  data,
  error,
  onChange,
}) => {
  return (
    <MsolComponentHighlighter>
      <>
        <Grid container>
          {data.map((cardCheckboxProps) => {
            const comparedChecked = comparedIds.includes(cardCheckboxProps.id);
            const selectedChecked = cardCheckboxProps.id === selectedId;

            function handleCompareChange() {
              if (comparedChecked) {
                const newCompareIds = comparedIds.filter((_) => _ !== cardCheckboxProps.id);
                onChange(newCompareIds, selectedId);
              } else {
                const newCompareIds = [...comparedIds, cardCheckboxProps.id];
                onChange(newCompareIds, selectedId);
              }
            }

            function handleSelectChange() {
              onChange(comparedIds, cardCheckboxProps.id);
            }

            return (
              <Grid key={cardCheckboxProps.id} item xs={6} md={4} lg={2}>
                <CardCheckbox
                  {...cardCheckboxProps}
                  comparedChecked={comparedChecked}
                  selectedChecked={selectedChecked}
                  onCompareChange={handleCompareChange}
                  onSelectChange={handleSelectChange}
                />
              </Grid>
            );
          })}
        </Grid>
        {!error || <FormHelperText error={true}>{error}</FormHelperText>}
      </>
    </MsolComponentHighlighter>
  );
};

CardCheckboxGroup.propTypes = {
  comparedIds: PropTypes.arrayOf(PropTypes.string),
  selectedId: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      disabledTooltip: PropTypes.string,
      disabled: PropTypes.bool
    })
  ).isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func
};
