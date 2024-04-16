import { FormControl, MenuItem, Select } from "@mui/material";

const SingleSelect = (props) => {

  const selectedValue = props.schemaProps?.options?.find(option => option.selected)?.value || "";

  return (
    <FormControl size={props.size} style={{ minWidth: "7rem" }}>
      <Select
        label={props.schemaProps.label}
        name={props.schemaProps.name}
        onChange={(e) => {
          props.onChange(e, e.target.value, props.schemaProps.name);
        }}
        fullWidth={true}
        style={{ borderRadius: 0 }}
        defaultValue={selectedValue}
        disabled={props.schemaProps.disabled}
      >
        {props.schemaProps.options.map((menu, menuIndex) => {
          return (
            <MenuItem key={menuIndex} value={menu.value}>{menu.label}</MenuItem>
          );
        })}

      </Select>
    </FormControl>
  );
};

export default SingleSelect;