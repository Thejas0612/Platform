import { TextField } from "@mui/material";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const InputProps = {
    style: {
        minWidth: "5rem"
    },
}

const Input = (props) => {
  const [defaultValue, setDefaultvalue] = useState("");
  const [errorClass, setErrorClass] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[-+]?[0-9]*\.?[0-9]{0,4}$/;
    const validated = value.match(regex);
    if (validated) {
      setDefaultvalue(value);

      if (value < 0) {
        setErrorClass("errorClass");
      } else {
        setErrorClass("");
      }
    }
  };
  return (
    <Tooltip
      title={errorClass ? "Entered " + props.schemaProps.name + " is below 0" : ""}
      placement="top"
    >
      <TextField
        // {...props.schemaProps}
        value={defaultValue}
        onChange={handleChange}
        size={props.size}
        InputProps={{
          ...InputProps,
          className: props.schemaProps.required ? "Mui-focused " + errorClass : " " + errorClass
        }}
      />
    </Tooltip>
  );
};

export default Input;