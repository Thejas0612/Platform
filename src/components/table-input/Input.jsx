import { TextField } from "@mui/material";
import { useState } from "react";
import CustomTooltip from "./CustomTooltip";
import { TEN_THOUSAND_PLACE_DECIMAL_MATCHER } from "../../utils/constants";

const InputProps = {
  style: {
    minWidth: "5rem"
  }
};

const Input = (props) => {
  const [defaultValue, setDefaultvalue] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = value.match(TEN_THOUSAND_PLACE_DECIMAL_MATCHER);
    
    if (isValid) {
      setDefaultvalue(value);
      if (props.schemaProps.min != null && value !== "" && value < props.schemaProps.min) {
        setError(true);
        setErrorMessage(props.schemaProps.minError);
        return;
      } else {
        setError(false);
        setErrorMessage("");
      }
    }
  };
  return (
    <CustomTooltip title={error ? errorMessage : ""} placement="top">
      <TextField
        value={defaultValue}
        onChange={handleChange}
        onBlur={(e) =>
          setDefaultvalue(defaultValue !== "" && defaultValue !== "-"? String(Number(defaultValue).toFixed(4)) : "")
        }
        size={props.size}
        error={error}
        InputProps={{
          ...InputProps,
          className: props.schemaProps.required ? "Mui-focused " : ""
        }}
        disabled={props.schemaProps.disabled}
      />
    </CustomTooltip>
  );
};

export default Input;
