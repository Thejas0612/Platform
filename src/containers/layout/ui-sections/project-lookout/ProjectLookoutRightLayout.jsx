import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonStepperCommon from "../../../../components/button/ButtonStepperCommon";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";
import { saveValuesInSchema, updateNavigationStatus } from "./schema-services/schemaMutations";
import {
  updateLeftSection,
  updateRightSection
} from "../../../../redux/reducers/initialBuDataSlice";
import { cloneDeep } from "lodash";
import { schemaBuilder } from "./schema-builder/schemaBuilder";
import { notNullOrUndefined } from "../../../../utils/assert";
import { FLUID_SOURCE_OPTIONS, TECHNOLOGY_TYPES_OPTIONS } from "./constants";
import { environment } from "../../../../config/environment";

const DISABLE_TOOLTIP = "There are no products that measure both Flow and Viscosity.";

/**
 * @param measurementTypes {string[]}
 * @return {string}
 */
export function generateLineSizeUrl(measurementTypes) {
  const url = new URL("/api/lookout/line-sizes", environment.VITE_API_URL);
  measurementTypes.forEach((measurementType) => {
    url.searchParams.append("measurementTypes", measurementType);
  });

  return url.toString();
}

/**
 * @param fluidType {string}
 * @return {string}
 */
export function generateFluidDatabase(fluidType) {
  const url = new URL("/api/processcondition/fluidsDatabase", environment.VITE_API_URL);
  url.searchParams.set("fluidType", fluidType);
  url.searchParams.set("buCode", "project_Lookout");

  return url.toString();
}

export default function ProjectLookoutRightLayout() {
  const screenIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const rightSectionSchema = useSelector((state) => state.initialBuData?.rightSection);
  const leftSectionSchema = useSelector((state) => state.initialBuData?.leftSection);
  const dispatch = useDispatch();

  const hasSchemaLoaded = rightSectionSchema != null && 0 < rightSectionSchema.length;
  if (!hasSchemaLoaded) {
    return <></>;
  }

  const screenSchema = getSchemaForDynamicForm(
    screenIndex,
    rightSectionSchema[0].componentProps.schema
  );
  const screenSchemaCopy = cloneDeep(screenSchema);

  const handleSchemaIndexChange = (screenIndexNew) => {
    const leftSectionSchemaNew = updateNavigationStatus(leftSectionSchema, screenIndexNew);
    dispatch(updateLeftSection(leftSectionSchemaNew));
  };

  const handleChange = (_event, _type, newScreenSchemas, _name, _isValid) => {
    const rightSectionSchemaNew1 = saveValuesInSchema(
      newScreenSchemas,
      rightSectionSchema,
      screenIndex
    );

    const rightSectionSchemaNew2 = schemaBuilder(rightSectionSchemaNew1)
      .screen(0)
      .tileThumbnail("measurement-type")
      .onChange((field, value, fieldFinder) => {
        const flowOption = field.data?.find((_) => _.id === TECHNOLOGY_TYPES_OPTIONS.FLOW_ID);
        notNullOrUndefined(flowOption, "Could not find flowOption.");

        const viscosityOption = field.data?.find(
          (_) => _.id === TECHNOLOGY_TYPES_OPTIONS.VISCOSITY_ID
        );
        notNullOrUndefined(viscosityOption, "Could not find viscosityOption.");

        const isFlowSelected = value.includes(TECHNOLOGY_TYPES_OPTIONS.FLOW_ID);
        const isViscositySelected = value.includes(TECHNOLOGY_TYPES_OPTIONS.VISCOSITY_ID);

        const isFlowDisabled = isViscositySelected;
        const isViscosityDisabled = isFlowSelected;

        flowOption.disabled = isFlowDisabled;
        flowOption.tooltip = isFlowDisabled ? DISABLE_TOOLTIP : undefined;

        viscosityOption.disabled = isViscosityDisabled;
        viscosityOption.tooltip = isViscosityDisabled ? DISABLE_TOOLTIP : undefined;

        const lineSize = fieldFinder.findSingleSelect(1, "line-size");
        lineSize.dataSourceUrl = generateLineSizeUrl(value);
      })
      .screen(1)
      .customButtonGroup("fluid-type")
      .onChange((_field, value, fieldFinder) => {
        const fluidsDatabase = fieldFinder.findSingleSelect(1, "fluids-database");
        fluidsDatabase.dataSourceUrl = generateFluidDatabase(value);
        _field.defaultId = value !== undefined ? value : "LIQUID";
        const saturatedTemperaturePressure = fieldFinder.findRadioInput(
          1,
          "saturatedTemperaturePressure"
        );

        const fluidSource = fieldFinder.findRadioInput(1, "fluid-source");
        const textInput = fieldFinder.findTextInput(1, "custom-fluid-name");
        const tableInput1 = fieldFinder.findTableInput(2, "TABLE_INPUT1");
        const tableInput2 = fieldFinder.findTableInput(2, "TABLE_INPUT2");

        if (value === "STEAM") {
          saturatedTemperaturePressure.hide = false;
          saturatedTemperaturePressure.value = "superheated";
          fluidSource.hide = true;
          fluidsDatabase.hide = true;
          textInput.hide = true;

          tableInput2.data[1][0].disabled = true;
          tableInput2.data[1][1].disabled = true;
          tableInput2.data[1][2].disabled = true;
          tableInput2.data[1][2].required = false;
          tableInput2.data[1][3].disabled = true;
          tableInput2.data[2][1].disabled = true;
          tableInput2.data[2][2].disabled = true;
          tableInput2.data[2][2].required = false;
          tableInput2.data[2][3].disabled = true;
          tableInput2.data[3][2].disabled = true;
          tableInput2.data[3][1].disabled = true;
        } else {
          fluidSource.value = "DATABASE";
          fluidSource.hide = false;
          saturatedTemperaturePressure.hide = true;
          fluidsDatabase.hide = false;
          textInput.hide = true;

          tableInput1.data[2][2].disabled = false;
          tableInput1.data[2][2].required = true;
          tableInput1.data[3][2].disabled = false;

          tableInput1.data[3][2].required = true;

          tableInput2.data[1][0].disabled = true;
          tableInput2.data[1][1].disabled = true;
          tableInput2.data[1][2].disabled = true;
          tableInput2.data[1][2].required = false;
          tableInput2.data[1][3].disabled = true;
          tableInput2.data[2][1].disabled = true;
          tableInput2.data[2][2].disabled = true;
          tableInput2.data[2][2].required = false;
          tableInput2.data[2][3].disabled = true;
          tableInput2.data[3][2].disabled = true;
          tableInput2.data[3][1].disabled = true;
        }
      })
      .radioInput("saturatedTemperaturePressure")
      .onChange((_field, value, fieldFinder) => {
        const tableInput1 = fieldFinder.findTableInput(2, "TABLE_INPUT1");
        const saturatedTemperaturePressure = fieldFinder.findRadioInput(
          1,
          "saturatedTemperaturePressure"
        );

        const fluidType = fieldFinder.findCustomButtonGroup(1, "fluid-type");

        if (fluidType.value === "STEAM") {
          tableInput1.data[2][2].disabled =
            saturatedTemperaturePressure.value === "saturated-temperature" ? true : false;
          tableInput1.data[2][2].required =
            saturatedTemperaturePressure.value === "saturated-temperature" ? false : true;
          tableInput1.data[3][2].disabled =
            saturatedTemperaturePressure.value === "saturated-pressure" ? true : false;
          tableInput1.data[3][2].required =
            saturatedTemperaturePressure.value === "saturated-pressure" ? false : true;
        } else {
          tableInput1.data[2][2].disabled = false;
          tableInput1.data[2][2].required = true;
          tableInput1.data[3][2].disabled = false;
          tableInput1.data[3][2].required = true;
        }
      })
      .radioInput("fluid-source")
      .onChange((_field, value, fieldFinder) => {
        const fluidsDatabase = fieldFinder.findSingleSelect(1, "fluids-database");
        const customFluidName = fieldFinder.findTextInput(1, "custom-fluid-name");
        const fluidType = fieldFinder.findCustomButtonGroup(1, "fluid-type");
        const tableInput2 = fieldFinder.findTableInput(2, "TABLE_INPUT2");

        if (fluidType.value !== "STEAM") {
          fluidsDatabase.hide = value !== FLUID_SOURCE_OPTIONS.DATABASE;
          customFluidName.hide = value !== FLUID_SOURCE_OPTIONS.CUSTOM;
        }

        if (value === "DATABASE") {
          tableInput2.data[1][1] = {
            type: "TEXT_INPUT",
            name: "density_min",
            disabled: true,
            align: "center",
            precision: 4,
            min: 0.0001,
            minError: "Entered Minimum Density is below or equal to 0"
          };

          tableInput2.data[1][2] = {
            type: "TEXT_INPUT",
            name: "density_norm",
            inputClass: "customRequired",
            disabled: true,
            required: false,
            align: "center",
            precision: 4,
            min: 0.0001,
            minError: "Entered Normal Density is below or equal to 0"
          };

          tableInput2.data[1][3] = {
            type: "TEXT_INPUT",
            name: "density_max",
            disabled: true,
            align: "center",
            precision: 4,
            min: 0.0001,
            minError: "Entered Maximum Density is below or equal to 0"
          };

          tableInput2.data[1][4] = {
            type: "SINGLE_SELECT",
            name: "density_unit",
            value: "Meter",
            disabled: false,
            align: "center",
            inputClass: "unitClass",
            options: [
              {
                value: "kg/m3",
                label: "kg/m3"
              },
              {
                value: "g/cm3",
                label: "g/cm3",
                selected: true
              },
              {
                value: "lb/ft3",
                label: "lb/ft3"
              },
              {
                value: "lb/gallon(US)",
                label: "lb/gallon(US)"
              }
            ]
          };

          tableInput2.data[1][0].disabled = true;
          tableInput2.data[2][1].disabled = true;
          tableInput2.data[2][2].disabled = true;
          tableInput2.data[2][2].required = false;
          tableInput2.data[2][3].disabled = true;
          tableInput2.data[3][2].disabled = true;
        } else {
          tableInput2.data[1][0].disabled = false;
          tableInput2.data[1][1].disabled = false;
          tableInput2.data[1][2].disabled = false;
          tableInput2.data[1][2].required = true;
          tableInput2.data[1][3].disabled = false;
          tableInput2.data[2][1].disabled = false;
          tableInput2.data[2][2].disabled = false;
          tableInput2.data[2][2].required = true;
          tableInput2.data[2][3].disabled = false;
          tableInput2.data[3][2].disabled = false;
        }
      })
      .singleSelect("line-size")
      .screen(2)
      .tableInput("TABLE_INPUT2")
      .onChange((field, value) => {
        if (value.density_options === "specific_gravity") {
          field.data[1][1] = {};
          field.data[1][2] = {
            type: "TEXT_INPUT",
            name: "density_norm",
            inputClass: "customRequired",
            disabled: false,
            required: true,
            align: "center",
            precision: 4
          };
          field.data[1][3] = {
            type: "TEXT",
            label: "@60F and 14.7psia",
            align: "center"
          };
          field.data[1][4] = {};
        } else {
          if (field.data[1][0].disabled == false) {
            field.data[1][1] = {
              type: "TEXT_INPUT",
              name: "density_min",
              disabled: false,
              align: "center",
              precision: 4,
              min: 0.0001,
              minError: "Entered Minimum Density is below or equal to 0"
            };
            field.data[1][2] = {
              type: "TEXT_INPUT",
              name: "density_norm",
              inputClass: "customRequired",
              disabled: false,
              required: true,
              align: "center",
              precision: 4,
              min: 0.0001,
              minError: "Entered Normal Density is below or equal to 0"
            };
            field.data[1][3] = {
              type: "TEXT_INPUT",
              name: "density_max",
              disabled: false,
              align: "center",
              precision: 4,
              min: 0.0001,
              minError: "Entered Maximum Density is below or equal to 0"
            };
            field.data[1][4] = {
              type: "SINGLE_SELECT",
              name: "density_unit",
              value: "Meter",
              disabled: false,
              align: "center",
              inputClass: "unitClass",
              options: [
                {
                  value: "kg/m3",
                  label: "kg/m3"
                },
                {
                  value: "g/cm3",
                  label: "g/cm3",
                  selected: true
                },
                {
                  value: "lb/ft3",
                  label: "lb/ft3"
                },
                {
                  value: "lb/gallon(US)",
                  label: "lb/gallon(US)"
                }
              ]
            };
          }
        }
      })
      .build(screenIndex, newScreenSchemas);

    dispatch(updateRightSection(rightSectionSchemaNew2));
  };

  return (
    <>
      <MSOLDynamicForm schema={screenSchemaCopy} handleChange={handleChange} />
      <ButtonStepperCommon updateSchemaIndex={handleSchemaIndexChange} />
    </>
  );
}
