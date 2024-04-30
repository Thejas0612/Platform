import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { MsolComponentHighlighter } from "../msol-component-highlighter/MsolComponentHighlighter";
import { grey } from "@mui/material/colors";

export const FilterButton = ({
                        label,
                        value = true,
                        onChange,
                      }) => {

  const handleButtonClick = (e) => {
    const newValue = !value
    onChange(e, undefined, name, newValue);
  };

  return (
    <MsolComponentHighlighter>
      <Button
        variant="text"
        size="large"
        endIcon={value ? <CloseIcon /> : <TuneIcon />}
        onClick={handleButtonClick}
        sx={{
          textTransform: "none",
          color: grey[900],
        }}
      >
        {label}
      </Button>
    </MsolComponentHighlighter>
  );
};

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool
};

FilterButton.defaultProps = {
  onChange: () => {},
};
