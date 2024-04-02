import React from 'react';
import TextField from '@mui/material/TextField';

function TextInput({ name, value, onChange, ...props }) {

    const [defaultValue, setDefaultValue] = React.useState('');

    React.useEffect(() => {
        setDefaultValue(value)
    }, [value])

    const handleChange = (event) => {
        setDefaultValue(event.target.value);
    };

    const handleblur = (event) => {
        setDefaultValue(event.target.value);
        onChange(event, props.othAttr?.type, name, event.target.value);
    }

    return (
        <>
            <TextField
                {...props}
                onChange={handleChange}
                onBlur={handleblur}
            />
        </>
    )
}

export default TextInput