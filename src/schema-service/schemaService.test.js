import { mapFieldsByName } from "./schemaServiceHelper";

describe("mapFieldsByName", () => {
  it("should return an empty object when input is undefined", () => {
    expect(mapFieldsByName(undefined)).toEqual({});
  });

  it("should return an empty object when input is an empty array", () => {
    expect(mapFieldsByName([])).toEqual({});
  });

  it("should ignore elements without a name property", () => {
    const input = [{ id: 1 }, { id: 2 }];
    expect(mapFieldsByName(input)).toEqual({});
  });

  it("should map elements by name", () => {
    const input = [
      { name: "field1", value: 1 },
      { name: "field2", value: 2 }
    ];
    expect(mapFieldsByName(input)).toEqual({
      field1: { name: "field1", value: 1 },
      field2: { name: "field2", value: 2 }
    });
  });
});
