import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonStepperCommon from "../../../../components/button/ButtonStepperCommon";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";
import { updateNavigationStatus, saveValuesInSchema } from "./schema-services/schemaMutations";
import {
  updateLeftSection,
  updateRightSection
} from "../../../../redux/reducers/initialBuDataSlice";

export default function ProjectLookoutRightLayout() {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const leftSectionSchema = useSelector((state) => state.initialBuData?.leftSection);

  const dispatch = useDispatch();

  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndexSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);
    const activeIndexCopy = JSON.parse(JSON.stringify(activeIndexSchema));

    const updateSchemaIndex = (screenId) => {
      const leftSchema = updateNavigationStatus(leftSectionSchema, screenId);
      dispatch(updateLeftSection(leftSchema));
    };

    const updateValuesInSchema = (formData) => {
      const result = saveValuesInSchema(formData, rightSecSchema, activeIndex);
      dispatch(updateRightSection(result));
    };

    return (
      <div>
        <MSOLDynamicForm
          schema={activeIndexCopy}
          handleChange={(e, formObj, formData, name, isValid) => {
            console.log("e,formObj,formData, name, isValid: ", e, formObj, formData, name, isValid);
            updateValuesInSchema(formData);
          }}
          handleKeyPress={(a, b, c) => console.log("a,b,c handleKeyPress", a, b, c)}
          updateData={(a, b, c, d) => console.log("a,b,c,d updateData", a, b, c, d)}
        />
        <div>
          <ButtonStepperCommon updateSchemaIndex={updateSchemaIndex} />
        </div>
      </div>
    );
  }
  return <></>;
}
