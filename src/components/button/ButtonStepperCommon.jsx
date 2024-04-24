import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonInput } from "@emerson/dynamic-ui-public";
import { changeActiveIndex } from "../../redux/reducers/initialBuDataSlice";
import "./buttonStepper.css";

export default function ButtonStepperCommon({ updateSchemaIndex, stepsCount = null, onIndexChange = () => {} }) {
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const dispatch = useDispatch();
  const changeIndex = (i) => {
    onIndexChange(activeIndex, i);
    dispatch(changeActiveIndex(i));
    updateSchemaIndex(i);
  }
  
  return (
    <div className="button_stepper_wrapper">
      {activeIndex > 0 ? (
        <ButtonInput
          label="Previous"
          showBackIcon={true}
          onClick={() => changeIndex(activeIndex - 1)}
          btnType="secondary"
        />
      ) : (
        <div></div>
      )}
      {(stepsCount === null || activeIndex < (stepsCount - 1)) ? 
      <ButtonInput label="Next" onClick={() => changeIndex(activeIndex + 1)} />
      : <div></div>}
    </div>
  );
}
