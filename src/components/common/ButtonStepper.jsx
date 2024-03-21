import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonInput } from "../dynamic-ui/uiComponentsConfig";
import { button_stepper_wrapper } from "./buttonStepper.module.css";
import { changeAccordionStatus, schemaValidations } from "../../schema-service/schemaValidations";
import { changeActiveIndex } from "../../redux/reducers/initialBuDataSlice";
import PropTypes from "prop-types";

const ButtonStepper = ({ data, schema, updateValidations, buCode }) => {
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const dispatch = useDispatch();

  const onNextChange = () => {
    const update_errors = schemaValidations(activeIndex, data, schema);
    if (update_errors?.isError) {
      updateValidations(update_errors?.update_schema, buCode);
      return;
    }
    dispatch(changeActiveIndex(activeIndex + 1));
    updateValidations(update_errors?.update_schema, buCode);
  };

  return (
    <div className={button_stepper_wrapper}>
      {activeIndex > 0 ? (
        <ButtonInput
          label="Previous"
          showBackIcon={true}
          onClick={() => {
            dispatch(changeActiveIndex(activeIndex - 1));
            const navigation_changes = changeAccordionStatus(schema, activeIndex);
            updateValidations(navigation_changes, buCode);
          }}
        />
      ) : (
        <div></div>
      )}
      {activeIndex >= 0 && (
        <ButtonInput
          disabled={activeIndex === 1}
          label="Next"
          onClick={() => {
            onNextChange();
          }}
        />
      )}
    </div>
  );
};

ButtonStepper.propTypes = {
  schema: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  updateValidations: PropTypes.func,
  buCode: PropTypes.string.isRequired
};

ButtonStepper.defaultProps = {
  updateValidations: () => {}
};
export default ButtonStepper;
