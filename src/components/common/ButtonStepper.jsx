import { useDispatch, useSelector } from "react-redux";
import { ButtonInput } from "@emerson/dynamic-ui-public";
import { button_stepper_wrapper } from "./buttonStepper.module.css";
import { changeAccordionStatus, schemaValidations } from "../../schema-service/schemaValidations";
import {
  changeActiveIndex,
  updateLeftSection,
  updateRightSection
} from "../../redux/reducers/initialBuDataSlice";
import PropTypes from "prop-types";
import DP_FLOW_CONSTANTS from "../../../src/containers/layout/ui-sections/dpflow/constants/dpFlowConstants";
import { cloneDeep } from 'lodash'

export default function ButtonStepper({ copyRightSectionSchema, visibleElements, activeIndex }) {
  const leftSectionSchema = useSelector((state) => state.initialBuData?.leftSection);
  // structeredClone is not part of ECMAScript standard, we need node 17 in docker image to support this
  const leftSectionSchemaCopy = cloneDeep(leftSectionSchema)
  const dispatch = useDispatch();

  const onNextChange = () => {
    const updatedRightSchema = schemaValidations(
      visibleElements,
      activeIndex,
      copyRightSectionSchema
    );
    if (updatedRightSchema?.isError) {
      dispatch(updateRightSection(updatedRightSchema?.copyRightSectionSchema));
      return;
    }
    if (activeIndex + 1 === 2) return;
    const updateLeftNavSchema = changeAccordionStatus(
      leftSectionSchemaCopy,
      activeIndex,
      DP_FLOW_CONSTANTS.BTN_NEXT
    );
    dispatch(changeActiveIndex(activeIndex + 1));
    dispatch(updateRightSection(copyRightSectionSchema));
    dispatch(updateLeftSection(updateLeftNavSchema));
  };

  const onPrevChange = () => {
    const updateLeftNavSchema = changeAccordionStatus(
      leftSectionSchemaCopy,
      activeIndex,
      DP_FLOW_CONSTANTS.BTN_PREV
    );
    dispatch(changeActiveIndex(activeIndex - 1));
    dispatch(updateLeftSection(updateLeftNavSchema));
  };

  if (activeIndex.toString()) {
    return (
      <div className={button_stepper_wrapper}>
        {activeIndex > 0 ? (
          <ButtonInput
            btnType="secondary"
            label="Previous"
            showBackIcon={true}
            onClick={() => onPrevChange()}
          />
        ) : (
          <div></div>
        )}
        {activeIndex >= 0 && (
          <ButtonInput
            label="Next"
            onClick={() => {
              onNextChange();
            }}
          />
        )}
      </div>
    );
  }
  return <></>;
}

ButtonStepper.propTypes = {
  copyRightSectionSchema: PropTypes.array.isRequired,
  visibleElements: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired
};
