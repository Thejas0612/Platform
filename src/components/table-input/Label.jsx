import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'var(--ddl-color--primary-white)',
    color: 'var(--ddl-color--primary-black)',
    border: "1px solid var(--ddl-color--primary-black)"
  }
}));

const Label = (props) => {
  return (
    <>
      <Typography align="center">
        {props.schemaProps.label}
        {props.schemaProps.title ? (
          <LightTooltip title={props.schemaProps.title} placement="top">
            <span className="dui-circle-info">
              <i>i</i>
            </span>
          </LightTooltip>
        ) : (
          <></>
        )}
      </Typography>
    </>
  );
};

export default Label;
