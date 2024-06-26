import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomTooltip from "./CustomTooltip";

const Label = (props) => {
  return (
    <>
      <Typography align="center">
      {props.schemaProps.title ? (
          <CustomTooltip title={props.schemaProps.title}>
            <span className="dui-circle-info">
              <i>i</i>
            </span>
          </CustomTooltip>
        ) : (
          <></>
        )}
        {props.schemaProps.label}
      </Typography>
    </>
  );
};

export default Label;
