import { TextField } from "@mui/material";

const InputProps = {
    style: {
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