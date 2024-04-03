import React, { FunctionComponent, useState } from "react";
import { Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { MsolComponentHighlighter } from "../msol-component-highlighter/MsolComponentHighlighter";
import { grey } from "@mui/material/colors";

export interface FilterButtonProps {
  label: string;
  onClick?: () => void;
}

export const FilterButton: FunctionComponent<FilterButtonProps> = ({
                                                                     label,
                                                                     onClick = () => {
                                                                     }
                                                                   }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleButtonClick = () => () => {
    setExpanded(!expanded);
    onClick();
  };

  return <MsolComponentHighlighter>
    <Button
      variant="text"
      size="large"
      endIcon={expanded ? <CloseIcon /> : <TuneIcon />}
      onClick={handleButtonClick()}
      sx={{
        textTransform: "none",
        color: grey[900]
      }}
    >
      {label}
    </Button>
  </MsolComponentHighlighter>;
};