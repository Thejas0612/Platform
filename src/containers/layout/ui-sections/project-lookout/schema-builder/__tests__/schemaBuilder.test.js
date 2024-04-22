import oldSchema from "../__mocks__/oldSchema.json";
import screenSchemaNew from "../__mocks__/screenSchemaNew.json";
import { schemaBuilder } from "../schemaBuilder";
import { notNullOrUndefined } from "../../../../../../utils/assert";

const VISCOSITY_ID = "VISCOSITY";

describe("schemaBuilder", () => {
  test("when measurement type is changed, then disable viscosity option.", () => {
    const schema = schemaBuilder(oldSchema)
      .screen(0)
      .tileThumbnail("measurement-type")
      .onChange((field) => {
        const viscosityOption = field.data?.find((_) => _.id === VISCOSITY_ID);
        notNullOrUndefined(viscosityOption, "Could not find viscosity option.");

        viscosityOption.disabled = true;
      })
      .build(0, screenSchemaNew);

    expect(schema).toMatchSnapshot();
  });

  test("when measurement type is changed, then process pipe text.", () => {
    const schema = schemaBuilder(oldSchema)
      .screen(0)
      .tileThumbnail("measurement-type")
      .onChange((_field, _value, fieldFinder) => {
        const processPiping = fieldFinder.findLabelText(0, "process-piping");
        processPiping.text = "Process Piping - UPDATED";
      })
      .build(0, screenSchemaNew);

    expect(schema).toMatchSnapshot();
  });

  test("when select specific gravity and then elements disappear", () => {
    const schema = schemaBuilder(oldSchema)
      .screen(2)
      .tableInput("TABLE_INPUT2")
      .onChange((field) => {
        field.data[1][1] = {};
        field.data[1][3] = {
          type: "TEXT",
          label: "@60F and 14.7psia",
          align: "center"
        };
        field.data[1][4] = {};
      })
      .build(0, screenSchemaNew);

    expect(schema).toMatchSnapshot();
  });

  test("Changin the custom button group option", () => {
    const schema = schemaBuilder(oldSchema)
      .screen(1)
      .customButtonGroup("fluidtype")
      .onChange((field, value) => {
        field.defaultId = "3";
      })
      .build(0, screenSchemaNew);

    expect(schema).toMatchSnapshot();
  });
});
