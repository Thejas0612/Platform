import React from "react";
import { PaStepper } from "@emerson/dynamic-ui";
const Stepper = (props) => {
  const StepperProps = {
    data: [],
    activeIndex: 1,
    onChange: () => {},
    datSourceUrl: ""
  };
  return (
    <>
      <PaStepper {...StepperProps} />
    </>
  );
};

export default Stepper;
