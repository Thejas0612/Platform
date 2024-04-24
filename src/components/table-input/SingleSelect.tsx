import { FormControl, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleSelect = (props:any) => {
  const [dropDownData , setDropDownData] = useState(props)
  const [userValue , setUserValue] = useState('')

  async function fetchOptions(url:any) {

    try {
      const response = await axios.get(url);
      return response.data
      
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(()=>{
    
    if(dropDownData.schemaProps.dataSourceUrl){
      
        (async () => {
            const response =  await fetchOptions(props.schemaProps.dataSourceUrl);
            setDropDownData({...dropDownData , schemaProps:{...dropDownData.schemaProps,options:response}  });
          
          })();


    }else{
        setDropDownData({...dropDownData})
    }
    
},[])
  
  const selectedValue = dropDownData?.schemaProps?.options?.find(option => option.selected)?.value || "";

  return (
    <FormControl size={props.size} style={{ minWidth: "7rem" }}>
      <Select
        label={props.schemaProps.label}
        name={props.schemaProps.name}
        onChange={(e) => {
          setUserValue(e.target.value)
          props.onChange(e, e.target.value, props.schemaProps.name);
        }}
        fullWidth={true}
        style={{ borderRadius: 0 }}
        value={userValue?.length > 0 ? userValue : selectedValue}
        disabled={props.schemaProps.disabled}
      >
        {dropDownData?.schemaProps?.options && dropDownData.schemaProps.options.map((menu, menuIndex) => {
          return (
            <MenuItem key={menuIndex} value={menu.value}>{menu.label}</MenuItem>
          );
        })}

      </Select>
    </FormControl>
  );
};

export default SingleSelect;