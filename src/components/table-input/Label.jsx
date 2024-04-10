import { Typography } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

const Label = (props) => {
    return (
        <>
            <Typography {...props.schemaProps} align="center">
                {props.schemaProps.label}
                {props.schemaProps.title ?  <Tooltip title={props.schemaProps.title} placement="top" arrow>
                                    <span className="dui-circle-info">
                                        <i>i</i>
                                    </span>
                                </Tooltip> 
                                : <></>
                }
            </Typography>
        </>
    )
}

export default Label;