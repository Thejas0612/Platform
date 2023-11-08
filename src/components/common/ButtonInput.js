import React from "react";
import { ButtonInput } from "@emerson/dynamic-ui";
const MsolButtonInput = (props) => {
  const ButtonProps = {
    btnType: props.type || "",
    label: props.label || "",
    disabled: false,
    showBackIcon: false,
    onClick: () => {}
  };
  return (
    <>
      <ButtonInput {...ButtonProps} />
    </>
  );
};

export default MsolButtonInput;
