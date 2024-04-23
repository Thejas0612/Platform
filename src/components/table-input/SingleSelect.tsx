import { FormControl, MenuItem, Select } from "@mui/material";
import  { useState, useEffect }  from "react";
import axios from 'axios';

const SingleSelect = (props) => {
  const [dropDownData , setDropDownData] = useState(props)
  const [userValue , setUserValue] = useState('')

  async function fetchOptions(url:string) {
 
    try {
      const response = await axios.post(url,props?.schemaProps?.payload);
      return response.data?.data
     
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(()=>{
    if(dropDownData.schemaProps.dataSourceUrl && dropDownData.schemaProps.unit_type){   
        (async () => {
            const response =  await fetchOptions(props.schemaProps.dataSourceUrl);
            const options = await response.filter((element:any)=>element.unit_type === props.schemaProps.unit_type);
            setDropDownData({...dropDownData , schemaProps:{...dropDownData.schemaProps,options:options}  });
          })();

    }else{
        setDropDownData({...dropDownData})
    }
   
},[])

  const selectedValue = props.schemaProps?.options?.find(option => option.selected)?.value || "";

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
        defaultValue={selectedValue}
        disabled={props.schemaProps.disabled}
        value={userValue?.length > 0 ? userValue : selectedValue}
      >
        {dropDownData?.schemaProps?.options && dropDownData.schemaProps.options.map((menu, menuIndex) => {
          return (
            <MenuItem key={menuIndex} value={menu?.value ? menu.value : menu.meaning}>{menu?.value ? menu.value : menu.meaning}</MenuItem>
          );
        })}

      </Select>
    </FormControl>
  );
};

export default SingleSelect;