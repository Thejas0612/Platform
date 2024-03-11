import { useDispatch, useSelector } from "react-redux";
import { ButtonInput } from "../dynamic-ui/uiComponentsConfig";
import "./buttonStepper.css";
import { changeAccordionStatus, schemaValidations } from "../../schema-service/schemaValidations";
import { changeActiveIndex } from "../../redux/reducers/initialBuDataSlice";

export default function ButtonStepper({ data, schema, updateValidations, buCode }) {
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
    <div className="button_stepper_wrapper">
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
      <ButtonInput
        label="Next"
        onClick={() => {
          onNextChange();
        }}
        size="sm"
      />
    </div>
  );
}
