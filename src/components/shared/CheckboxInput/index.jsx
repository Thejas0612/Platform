import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "white",
        color: "#000",
        borderRadius: 0,
        fontSize: 11,
        border: "1px solid var(--ddl-color--primary-emerson-green)",
    },
}));

function CheckboxInput({ label, options }) {
    const [data, setData] = React.useState([])

    //store the options to to local state
    React.useEffect(() => {
        setData(options)
    }, [options])

    return (
        <>
            <Box sx={{ mb: 1 }}>
                <Typography variant='body1'>{label}</Typography>
            </Box>
            {data.length && data.map(ele => (
                <FormGroup>
                    <Stack direction={'row'}>
                        <FormControlLabel sx={{ m: 0 }} control={<Checkbox size='small' color='success' />} label={ele.label} />
                        {ele.info &&
                            // <Tooltip title={ele.info} placement='top' arrow>
                            //     <IconButton>
                            //         <InfoIcon sx={{ color: '#00573d' }} />
                            //     </IconButton>
                            // </Tooltip>
                            <LightTooltip title={ele.info} placement="top">
                                <IconButton>
                                    <span id="pipeCrosToolTip" className="dui-circle-info">
                                        <i style={{}}>i</i>
                                    </span>
                                </IconButton>
                            </LightTooltip>
                        }
                    </Stack>
                </FormGroup >
            ))
            }
        </>
    )
}

export default CheckboxInput