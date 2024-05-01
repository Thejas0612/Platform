import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { MsolComponentHighlighter } from "../msol-component-highlighter/MsolComponentHighlighter";
import { grey } from "@mui/material/colors";

export const FilterButton = ({
                        label,
                        onClick,
                      }) => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
    onClick();
  };

  return (
    <MsolComponentHighlighter>
      <Button
        variant="text"
        size="large"
        endIcon={expanded ? <CloseIcon /> : <TuneIcon />}
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
  onClick: PropTypes.func,
};

FilterButton.defaultProps = {
  onClick: () => {},
};
