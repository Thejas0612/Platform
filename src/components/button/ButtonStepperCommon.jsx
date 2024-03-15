import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonInput } from "../dynamic-ui/uiComponentsConfig";
import { changeActiveIndex } from "../../redux/reducers/initialBuDataSlice";
import "./buttonStepper.css";

export default function ButtonStepperCommon() {
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const dispatch = useDispatch();
  return (
    <div className="button_stepper_wrapper">
      {activeIndex > 0 ? (
        <ButtonInput
          label="Previous"
          showBackIcon={true}
          onClick={() => dispatch(changeActiveIndex(activeIndex - 1))}
        />
      ) : (
        <div></div>
      )}
      <ButtonInput label="Next" onClick={() => dispatch(changeActiveIndex(activeIndex + 1))} />
    </div>
  );
}
