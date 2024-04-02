import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonInput } from "../dynamic-ui/uiComponentsConfig";
import { changeActiveIndex, updateNavigationStatus } from "../../redux/reducers/initialBuDataSlice";
import "./buttonStepper.css";
import { changeNavigationStatus } from "../../../src/schema-service/project_Lookout/schemaValidations";

export default function ButtonStepperCommon() {
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const navigationSchema = useSelector((state) => state.initialBuData?.leftSection);
  const dispatch = useDispatch();
  return (
    <div className="button_stepper_wrapper">
      {activeIndex > 0 ? (
        <ButtonInput
          label="Previous"
          showBackIcon={true}
          onClick={() => {
            dispatch(changeActiveIndex(activeIndex - 1));
            const left = changeNavigationStatus(navigationSchema, activeIndex, "prev");
            dispatch(updateNavigationStatus(left));
          }}
        />
      ) : (
        <div></div>
      )}
      <ButtonInput
        label="Next"
        onClick={() => {
          dispatch(changeActiveIndex(activeIndex + 1));
          const left = changeNavigationStatus(navigationSchema, activeIndex, "next");
          dispatch(updateNavigationStatus(left));
        }}
      />
    </div>
  );
}
