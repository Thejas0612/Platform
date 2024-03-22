import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const selectStyles = {
  boxShadow: "none",
  ".MuiOutlinedInput-notchedOutline": { borderBottom: 0, borderRight: 0, borderLeft: 0 },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    border: 0
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0
  }
}

export interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  id: string;
  label: string;
  options: Option[];
  onChange: (id: string, value: string) => void;
}

const DropdownMenu: React.FC<DropdownProps> = ({ id, label, options, onChange }) => {
  const [value, setValue] = useState("");
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedValue = event.target.value as string;
    setValue(selectedValue);
    onChange(id, selectedValue);
  };
  const isValueSelected = value !== "";
  return (
    <FormControl fullWidth>
      <InputLabel shrink={isValueSelected}>{label}</InputLabel>
      <Select
        onChange={handleChange}
        sx={selectStyles}
        IconComponent={KeyboardArrowDownIcon}
        value={value}
        label={label}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownMenu;
