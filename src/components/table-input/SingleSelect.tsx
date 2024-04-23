import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleSelect = (props) => {
  const [dropDownData, setDropDownData] = useState(props.options || []);
  const [userValue, setUserValue] = useState("");

  async function fetchOptions(url: string) {
    const response = await axios.get(url);
    return response.data;
  }


  useEffect(() => {
    if (!props.schemaProps.dataSourceUrl) {
      return;
    }

    fetchOptions(props.schemaProps.dataSourceUrl).then(options => {
      debugger
      setDropDownData(options);
    });
  }, []);

  const selectedValue = props.schemaProps?.options?.find(option => option.selected)?.value || "";

  return (
    <FormControl size={props.size} style={{ minWidth: "7rem" }}>
      <Select
        label={props.schemaProps.label}
        name={props.schemaProps.name}
        onChange={(e) => {
          setUserValue(e.target.value);
          props.onChange(e, e.target.value, props.schemaProps.name);
        }}
        fullWidth={true}
        style={{ borderRadius: 0 }}
        defaultValue={selectedValue}
        disabled={props.schemaProps.disabled}
        value={userValue?.length > 0 ? userValue : selectedValue}
      >
        {dropDownData && dropDownData.map((option: any) => {
          return (
            <MenuItem key={option.id}
                      value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}

      </Select>
    </FormControl>
  );
};

export default SingleSelect;