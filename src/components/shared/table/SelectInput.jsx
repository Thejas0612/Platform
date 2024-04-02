import React from 'react';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import FormHelperText from '@mui/material/FormHelperText';

function SelectInput({ name, onChange, options, required, error }) {

    const [defaultValue, setDefaultValue] = React.useState('');

    const handleChange = (e) => {
        onChange(e, "selectSimple", name, e.target.value);
        setDefaultValue(e.target.value);
    };

    return (
        <FormControl size='small' color='success'>
            <Select value={defaultValue} required={required} onChange={handleChange}>
                {options.length > 0 && options.map((opt, i) => (
                    <MenuItem key={i} value={opt.label}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectInput