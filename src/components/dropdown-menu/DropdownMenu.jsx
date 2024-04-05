import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid, } from "@mui/material";
import { log } from 'mathjs';

function DropdownMenu(schema) {
    const [defaultValue, setDefaultValue] = React.useState('');
    console.log(schema)
    const handleChange = (e) => { };
    return (
            <div >
                <FormControl sx={{ m: 1, mt: 3, margin: '1rem', width: "100%" , display:"flex"}} size='small' color='success'>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} >
                            <div style={{ minHeight: "2rem" }}>
                                <label >{schema.label}</label>
                                {schema.tooltipEnable ? <Tooltip title={schema.tooltipMessage} placement="top" arrow>
                                    <IconButton sx={{ padding: 0, paddingLeft: '.5rem' }}>
                                        <InfoIcon sx={{ color: '#00573d' }} fontSize="small" />
                                    </IconButton>
                                </Tooltip> : <></>}
                            </div>
                            <Select sx={{ width: '100%' }} value={defaultValue} onChange={handleChange}>
                                {schema.options.length > 0 && schema.options.map((opt, i) => (
                                    <MenuItem key={i} value={opt.label}>
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </FormControl>
                {schema.nextLine ? <br></br> : ""}
            </div>
    )
}

export default DropdownMenu

