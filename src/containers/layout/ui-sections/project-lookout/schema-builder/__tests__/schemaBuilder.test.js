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
        const viscosityOption = field.data?.find(_ => _.id === VISCOSITY_ID);
        if (viscosityOption == null) {
          throw new Error("Could not find viscosityOption.");
        }

        viscosityOption.disabled = true
      })
      .build(0, screenSchemaNew);

    expect(schema).toMatchSnapshot();
  });
});