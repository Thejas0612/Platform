import oldSchema from "../__mocks__/oldSchema.json";
import screenSchemaNew from "../__mocks__/screenSchemaNew.json";
import { schemaBuilder } from "../schemaBuilder";

const VISCOSITY_ID = "VISCOSITY";

describe("schemaBuilder", () => {
  it("when measurement type is update, then disable ", () => {
    const schema = schemaBuilder(oldSchema)
      .screen(0)
      .tileThumbnail("measurement-type")
      .onChange((field) => {
        const viscosityOption = field.data?.find((_) => _.id === VISCOSITY_ID);
        if (viscosityOption == null) {
          throw new Error("Could not find viscosityOption.");
        }

        viscosityOption.disabled = true;
      })
      .build(0, screenSchemaNew);

    expect(schema).toMatchSnapshot();
  });

  it("when select specific gravity and then elements disappear", () => {
    const schema = schemaBuilder(oldSchema)
      .screen(2)
      .tableInput("TABLE_INPUT2")
      .onChange((field, value) => {
        //doing changes for specific_gravity
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
});
