import customButtonGroup__updateValue__screenSchema__new
  from "../__mocks__/customButtonGroup__updateValue__screenSchema__new.json";
import customButtonGroup__updateValue_workflowSchema__old
  from "../__mocks__/customButtonGroup__updateValue_workflowSchema__old.json";
import tileThumbnail__updateAnotherField__screenSchema__new
  from "../__mocks__/tileThumbnail__updateAnotherField__screenSchema__new.json";
import tileThumbnail__updateAnotherField__workflowSchema__old
  from "../__mocks__/tileThumbnail__updateAnotherField__workflowSchema__old.json";
import tileThumbnail__updateValue__workflowSchema__old
  from "../__mocks__/tileThumbnail__updateValue__workflowSchema__old.json";
import tileThumbnail__updateValue__screenSchema__new
  from "../__mocks__/tileThumbnail__updateValue__screenSchema__new.json";
import tableInput__updateValue__screenSchema__new from "../__mocks__/tableInput__updateValue__screenSchema__new.json";
import singleSelect__updateValue__screenSchema_new from "../__mocks__/singleSelect__updateValue__screenSchema__new.json";
import singleSelect__updateValue__workflowSchema_old
  from "../__mocks__/singleSelect__updateValue__workflowSchema_old.json";
import tableInput__updateValue__workflowSchema__old
  from "../__mocks__/tableInput__updateValue__workflowSchema__old.json";
import { schemaBuilder } from "../schemaBuilder";
import { notNullOrUndefined } from "../../../../../../utils/assert";
import { TECHNOLOGY_TYPES_OPTIONS } from "../../constants";

describe("schemaBuilder", () => {
  describe("tileThumbnail", () => {
    test("when Measurement Type is changed to Density, then disable Viscosity option.", () => {
      let valueActual = [];
      const schema = schemaBuilder(tileThumbnail__updateValue__workflowSchema__old)
        .screen(0)
        .tileThumbnail("measurement-type")
        .onChange((field, value) => {
          valueActual = value;
          const viscosityOption = field.data?.find(_ => _.id === TECHNOLOGY_TYPES_OPTIONS.VISCOSITY_ID);
          notNullOrUndefined(viscosityOption, "Could not find viscosity option.");

          viscosityOption.disabled = true;
        })
        .build(0, tileThumbnail__updateValue__screenSchema__new);

      expect(valueActual).toEqual([
        "DENSITY"
      ]);
      expect(schema).toMatchSnapshot();
    });

    test("when Measurement Type is changed, then update Process Piping field text.", () => {
      const schema = schemaBuilder(tileThumbnail__updateAnotherField__workflowSchema__old)
        .screen(0)
        .tileThumbnail("measurement-type")
        .onChange((_field, _value, fieldFinder) => {
          const processPiping = fieldFinder.findLabelText(0, "process-piping");
          processPiping.text = "Process Piping - UPDATED";
        })
        .build(0, tileThumbnail__updateAnotherField__screenSchema__new);

      expect(schema).toMatchSnapshot();
    });
  });

  describe("tableInput", () => {
    test("when Density is changed to Specific Gravity, then blank Density Min cell and change Density Max cell to text", () => {
      let valueActual = {};
      const schema = schemaBuilder(tableInput__updateValue__workflowSchema__old)
        .screen(0)
        .tableInput("FLUID_PROPERTIES")
        .onChange((field, value) => {
          valueActual = value;

          field.data[1][1] = {};
          field.data[1][3] = {
            name: "DENSITY_MAX",
            type: "TEXT",
            label: "@60F and 14.7psia",
            align: "center"
          };
        })
        .build(0, tableInput__updateValue__screenSchema__new);

      expect(valueActual).toEqual({
        density: "SPECIFIC_GRAVITY"
      });
      expect(schema).toMatchSnapshot();
    });
  });

  describe("singleSelect", () => {
    test("when Flow Rate is changed to Gallons(US)/sec, then update Flow Rate label", () => {
      let valueActual = "";
      const schema = schemaBuilder(singleSelect__updateValue__workflowSchema_old)
        .screen(0)
        .singleSelect("flow-rate")
        .onChange((field, value) => {
          valueActual = value;
          field.label = "Flow Rate - UPDATE";
        })
        .build(0, singleSelect__updateValue__screenSchema_new);

      expect(valueActual).toBe("USGPS");
      expect(schema).toMatchSnapshot();
    });
  });

  describe("customButtonGroup", () => {
    test("when Fluid Type is changed to Gas, then update Fluid Type label.", () => {
      let valueActual = "";
      const schema = schemaBuilder(customButtonGroup__updateValue_workflowSchema__old)
        .screen(0)
        .customButtonGroup("fluid-type")
        .onChange((field, value) => {
          valueActual = value;

          field.label = "Fluid Type - UPDATE"
        })
        .build(0, customButtonGroup__updateValue__screenSchema__new);

      expect(valueActual).toBe("2");
      expect(schema).toMatchSnapshot();
    });
  });
});
