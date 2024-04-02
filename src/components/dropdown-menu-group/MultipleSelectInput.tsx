import  { FC, useState } from "react";
import { Checkbox, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material";
import isString from "lodash/isString";

export interface DropDownOption {
  label: string;
  title: string;
  value: string;
}

export interface MultipleSelectInputProps {
  placeholder: string;
  options: DropDownOption[];
  onChange: (value: string[]) => void;
}

function findLabel(options: DropDownOption[], value: string): string {
  const label = options.find(_ => _.value === value)?.label;

  if (label == null) {
    throw Error("Could not find option label.");
  }

  return label;
}

function renderValueWithPlaceholder(value: string | string[], placeholder: string, options: DropDownOption[]): string {
  if (isString(value)) {
    return findLabel(options, value);
  } else {
    if (value.length === 0) {
      return placeholder;
    } else {
      return value.map(_ => findLabel(options, _)).join(", ");
    }
  }
}

export const MultipleSelectInput: FC<MultipleSelectInputProps> = ({
                                                                                   placeholder,
                                                                                   options,
                                                                                   onChange = () => {
                                                                                   }
                                                                                 }) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof value | string>) => {
    const newValue = isString(event.target.value) ? event.target.value.split(",") : event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return <>

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
          borderTop: 1
        },
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
          borderTop: 2
        },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
          borderTop: 2
        }
      }} />}

    >
      {options.map((option) => (
        <MenuItem
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
  </>;
};