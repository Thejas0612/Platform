import React from "react";
import { CustomTag } from "@emerson/dynamic-ui";
const CustomTag =(props)=> {
    const CustomTagProps={
        data :[],
        label:"",
        labelClass:"",
        msg:"",
        size:"",
        onChange:()=> {},
        showLabel:true
    }
  return (
    <>
      <CustomTag
       {...CustomTagProps}
      />
    </>
  );
}

export default CustomTag;
