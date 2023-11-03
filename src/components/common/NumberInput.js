import React from "react";
import { NumberInput } from "@emerson/dynamic-ui";
const NumberInput=(props)=> {
    const NumberInputProps={
        label:"",
        title:"",
        showLabel:false,
        type:"",
        name:"",
        value:"",
        error:"",
        errorClass:"",
        placeholder:"",
        max:"",
        wrapperClass:"",
        wrapperId:"",
        required:false,
        disabled:false,
        autofocus:false,
        onChange:()=>{}
    }
  return (
    <>
      <NumberInput {...NumberInputProps} />
    </>
  );
}

export default NumberInput;
