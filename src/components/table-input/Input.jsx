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
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = value.match(TEN_THOUSAND_PLACE_DECIMAL_MATCHER);

    const isFlowRow = ["flow_rate_min", "flow_rate_norm", "flow_rate_max"];
    const isDensityRow = ["density_min", "density_norm", "density_max"];

    const isViscosityRow = ["viscosity_min", "viscosity_norm", "viscosity_max"];

    if (isValid) {
      setDefaultvalue(value);

      if (isFlowRow.includes(props.schemaProps.name) && value < 0) {
        setError(true);
        setErrorMessage(
          "Entered " +
            props.schemaProps.name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) +
            " is below 0"
        );
      } else if (isDensityRow.includes(props.schemaProps.name) && value <= 0) {
        setError(true);
        setErrorMessage(
          "Entered " +
            props.schemaProps.name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) +
            " is below or equal to 0"
        );
      } else if (isViscosityRow.includes(props.schemaProps.name) && value < 0.01) {
        setError(true);
        setErrorMessage(
          "Entered " +
          props.schemaProps.name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) +
          " is below or equal to 0.01"
        );
      }
      else if (value >= 0 || value === "") {
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
          setDefaultvalue(defaultValue !== "" ? String(Number(defaultValue).toFixed(4)) : "")
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
