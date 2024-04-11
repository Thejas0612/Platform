import { TextField } from "@mui/material";
import { useState } from "react";
import CustomTooltip from "./CustomTooltip";
import { TEN_THOUSAND_PLACE_DECIMAL_MATCHER } from "../../utils/constants";

const InputProps = {
    style: {
        minWidth: "5rem"
    },
}

const Input = (props) => {
  const [defaultValue, setDefaultvalue] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = value.match(TEN_THOUSAND_PLACE_DECIMAL_MATCHER);

    if (isValid) {
      setDefaultvalue(value);
      if (value < 0) {
        setError(true);
      } else if (value > 0 || value === "") {
        setError(false);
      }
    }
  };
  return (
    <CustomTooltip
      title={error ? "Entered " + props.schemaProps.name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) + " is below 0" : ""}
      placement="top"
    >
      <TextField
        value={defaultValue}
        onChange={handleChange}
        onBlur={e => setDefaultvalue( defaultValue !== "" ? String(Number(defaultValue).toFixed(4)) : ""  )}
        size={props.size}
        error={error}
        InputProps={{
          ...InputProps,
          className: props.schemaProps.required ? "Mui-focused " : ""
        }}
      />
    </CustomTooltip>
  );
};

export default Input;
