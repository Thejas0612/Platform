import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid, } from "@mui/material";

function DropdownMenu(props) {
    const { schema } = props;
    const [defaultValue, setDefaultValue] = React.useState('');
    const handleChange = (e) => {};
    return (
        <div style={{ margin: '4rem' }}>
            {schema.data.map((item) => (
                <span>
                    <FormControl sx={{ m: 1, width: 300, mt: 3, margin: '1rem' }} style={{ width: '300px', height: '60px', margin: '' }} size='small' color='success'>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} >
                                <label >{item.label}</label>
                                {item.tooltipEnable ? <Tooltip title={item.tooltipMessage} placement="top" arrow>
                                    <IconButton>
                                        <InfoIcon color="primary" fontSize="small" />
                                    </IconButton>
                                </Tooltip> : <div style={{ padding: "9px" }}> </div>}
                                <Select sx={{ borderRadius: "4px", width: '100%' }} autoWidth={true} value={defaultValue} onChange={handleChange}>
                                    {item.options.length > 0 && item.options.map((opt, i) => (
                                        <MenuItem key={i} value={opt.label}>
                                            {opt.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </Grid>
                    </FormControl>
                    {item.nextLine ? <br></br> : ""}
                </span>
            ))}
        </div>
    )
}

export default DropdownMenu

