import { Typography } from "@mui/material";

const Label = (props) => {
    return (
        <Typography {...props.schemaProps} align="center">
            {props.schemaProps.label}
        </Typography>
    )
}

export default Label;