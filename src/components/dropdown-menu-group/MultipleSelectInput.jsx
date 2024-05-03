import React from "react";
import PropTypes from "prop-types";
import { Checkbox, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import isString from "lodash/isString";

const findLabel = (options, value) => {
  const label = options.find((_) => _.value === value)?.label;

  if (label == null) {
    throw Error("Could not find option label.");
  }

  return label;
};

const renderValueWithPlaceholder = (value, placeholder, options) => {
  if (isString(value)) {
    return findLabel(options, value);
  } else {
    if (value.length === 0) {
      return placeholder;
    } else {
      return value.map((_) => findLabel(options, _)).join(", ");
    }
  }
};

export const MultipleSelectInput = ({
                               placeholder,
                               options,
                               value,
                               onChange,
                             }) => {
  const handleChange = (event) => {
    const newValue = isString(event.target.value) ? event.target.value.split(",") : event.target.value;
    onChange(event, newValue);
  };

  return (
      <>
        <Select
            fullWidth
            multiple
            onChange={handleChange}
            value={value}
            displayEmpty={true}
            size="small"
            renderValue={(value) => {
              return renderValueWithPlaceholder(value, placeholder, options);
            }}
            input={<OutlinedInput sx={{
              fontSize: ".9rem",
              "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: 0,
                borderTop: 1,
              },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
                borderTop: 2,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
                borderTop: 2,
              },
            }} />}
        >
          {options.map((option) => (
              <MenuItem
                  disabled={option.isDisabled}
                  dense
                  disableGutters
                  key={option.value}
                  value={option.value}
              >
                <Checkbox size="small" checked={value.includes(option.value)} />
                <Typography variant="subtitle2">{option.label}</Typography>
              </MenuItem>
          ))}
        </Select>
      </>
  );
};

MultipleSelectInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
