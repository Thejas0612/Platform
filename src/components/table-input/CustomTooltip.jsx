import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--ddl-color--primary-white)",
    color: "var(--ddl-color--primary-black)",
    border: "1px solid var(--ddl-color--primary-black)"
  }
}));

export default function CustomTooltip(props) {
  return (
      <LightTooltip title={props.title} placement="top">
        {props.children}
      </LightTooltip>
  );
}
