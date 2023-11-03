import React from "react";
import { ButtonInput } from "@emerson/dynamic-ui";
const ButtonInput = (props) => {
  const ButtonProps = {
    btnType: "",
    label: "",
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

export default ButtonInput;
