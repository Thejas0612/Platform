import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonStepperCommon from "../../../../components/button/ButtonStepperCommon";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";
import { saveValuesInSchema, updateNavigationStatus } from "./schema-services/schemaMutations";
import { updateLeftSection, updateRightSection } from "../../../../redux/reducers/initialBuDataSlice";
import { cloneDeep } from "lodash";
import { schemaBuilder } from "./schema-builder/schemaBuilder";
import { notNullOrUndefined } from "../../../../utils/assert";
import { TECHNOLOGY_TYPES_OPTIONS } from "./constants";

const DISABLE_TOOLTIP = "There are no products that measure both Flow and Viscosity.";

export default function ProjectLookoutRightLayout() {
  const screenIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const rightSectionSchema = useSelector((state) => state.initialBuData?.rightSection);
  const leftSectionSchema = useSelector((state) => state.initialBuData?.leftSection);
  const dispatch = useDispatch();

  const hasSchemaLoaded = rightSectionSchema != null && 0 < rightSectionSchema.length;
  if (!hasSchemaLoaded) {
    return <></>;
  }

  const screenSchema = getSchemaForDynamicForm(screenIndex, rightSectionSchema[0].componentProps.schema);
  const screenSchemaCopy = cloneDeep(screenSchema);

  const handleSchemaIndexChange = (screenIndexNew) => {
    const leftSectionSchemaNew = updateNavigationStatus(leftSectionSchema, screenIndexNew);
    dispatch(updateLeftSection(leftSectionSchemaNew));
  };

  const handleChange = (_event, _type, newScreenSchemas, _name, _isValid) => {

    const rightSectionSchemaNew1= saveValuesInSchema(newScreenSchemas, rightSectionSchema, screenIndex);

    const rightSectionSchemaNew2 = schemaBuilder(rightSectionSchemaNew1)
      .screen(0)
      .tileThumbnail("measurement-type")
      .onChange((field, value) => {
        const flowOption = field.data?.find(_ => _.id === TECHNOLOGY_TYPES_OPTIONS.FLOW_ID);
        notNullOrUndefined(flowOption, "Could not find flowOption.");

        const viscosityOption = field.data?.find(_ => _.id === TECHNOLOGY_TYPES_OPTIONS.VISCOSITY_ID);
        notNullOrUndefined(viscosityOption, "Could not find viscosityOption.");

        const isFlowSelected = value.includes(TECHNOLOGY_TYPES_OPTIONS.FLOW_ID);
        const isViscositySelected = value.includes(TECHNOLOGY_TYPES_OPTIONS.VISCOSITY_ID);

        const isFlowDisabled = isViscositySelected;
        const isViscosityDisabled = isFlowSelected;

        flowOption.disabled = isFlowDisabled;
        flowOption.tooltip = isFlowDisabled ? DISABLE_TOOLTIP : undefined;

        viscosityOption.disabled = isViscosityDisabled;
        viscosityOption.tooltip = isViscosityDisabled ? DISABLE_TOOLTIP : undefined;
      })
      .build(screenIndex, newScreenSchemas);

    dispatch(updateRightSection(rightSectionSchemaNew2));
  };

  return (
    <>
      <MSOLDynamicForm
        schema={screenSchemaCopy}
        handleChange={handleChange}
      />
      <ButtonStepperCommon updateSchemaIndex={handleSchemaIndexChange} />
    </>
  );
}
