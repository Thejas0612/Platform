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
    
      setDefaultvalue(value);
      if (props.schemaProps.min != null && value !== "" && value < props.schemaProps.min) {
        setError(true);
        setErrorMessage(props.schemaProps.minError);
        return;
      } else {
        setError(false);
        setErrorMessage("");
      }
      props.onChange(e, e.target.value, props.schemaProps.name);
  };
  const precise = (x) => {
    if(props?.schemaProps?.precision){
      return isNaN(Number.parseFloat(x).toFixed(props?.schemaProps?.precision)) ? "" : Number.parseFloat(x).toFixed(props?.schemaProps?.precision) ;
    }
      return x;
  }
  return (
    <CustomTooltip title={error ? errorMessage : ""} placement="top">
      <TextField
        value={defaultValue}
        onChange={handleChange}
        onBlur={(e) => setDefaultvalue( defaultValue !== "" && defaultValue !== "-" && String(precise(defaultValue)) !== "" ?   String(precise(defaultValue)).split(".")[0].substring(0,6)+"."+String(precise(defaultValue)).split(".")[1].substring(0,4)  : ""  )}
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
