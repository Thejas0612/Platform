import React from "react";
import { ButtonInput } from "@emerson/dynamic-ui";
const MsolButtonInput = (props) => {
  return (
    <ButtonInput
      label={props.label}
      onClick={props.onClick}
      btnType={props.type}
      disabled={props.disabled}
      showBackIcon={props.icon}
    />
  );
};

export default MsolButtonInput;
