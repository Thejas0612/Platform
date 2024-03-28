import { TextField } from "@mui/material";

const InputProps = {
    style: {
        borderRadius: 0,
        minWidth: "5rem"
    },
}

const Input = (props) => {
    return (
        <TextField 
            {...props.schemaProps} 
            size={props.size} 
            InputProps={{...InputProps, className: (props.schemaProps.required) ? "Mui-focused" : ""}} 
        />
    )
}

export default Input;