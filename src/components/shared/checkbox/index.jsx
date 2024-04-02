import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    margin: 0,
    '& .MuiSvgIcon-root': {
        fontSize: 18
    },
    '& .MuiFormControlLabel-label': {
        fontWeight: 'lighter',
        fontSize: 14
    }
}))

function CheckboxInput({ name, label, options, selectedIds, onChange, error, ...props }) {

    const [rowChecked, setRowChecked] = React.useState([]);
    const [data, setData] = React.useState([])

    const handleChange = (event) => {
        if (rowChecked.includes(event.target.value)) {
            setRowChecked(rowChecked.filter(value => value !== event.target.value));
            onChange(event, props.othAttr?.type, name, rowChecked.filter(value => value !== event.target.value))
        } else {
            setRowChecked([...rowChecked, event.target.value])
            onChange(event, props.othAttr?.type, name, [...rowChecked, event.target.value])
        }
    }

    //store the options to to local state
    React.useEffect(() => {
        setData(options)
    }, [options])

    React.useEffect(() => {
        if (typeof selectedIds === 'object') {
            setRowChecked(Object.values(selectedIds));
            return;
        }
        setRowChecked(selectedIds);
    }, [selectedIds])

    return (
        <>
            <Box sx={{ mb: 1 }}>
                <Typography variant='h1'>{label}</Typography>
            </Box>
            {data.length && data.map((option, i) => (
                <FormGroup key={i}>
                    <Stack direction={'row'}>
                        <StyledFormControlLabel
                            control={
                                <Checkbox
                                    checked={rowChecked && rowChecked.includes(option.value)}
                                    color='primary'
                                    value={option.value}
                                    onChange={handleChange}
                                />
                            }
                            label={option.label}
                        />
                        {option.info &&
                            <Tooltip title={option.info} placement='top' arrow>
                                <IconButton>
                                    <InfoIcon htmlColor='#00573d' />
                                </IconButton>
                            </Tooltip>
                        }
                    </Stack>
                </FormGroup >
            ))
            }
            <Box sx={{ mt: 2 }}>
                {error && <Typography variant='subtitle1' error={error}>{error}</Typography>}
            </Box>
        </>
    )
}

export default CheckboxInput