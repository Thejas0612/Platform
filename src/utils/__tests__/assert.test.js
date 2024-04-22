import { notNullOrUndefined } from "../assert";

describe("assert", () => {
  describe("notNullOrUndefined", () => {
    test("when value is null, then throw error.", () => {
      const act = () => {
        notNullOrUndefined(null, "test message");
      };

      expect(act).toThrowError("test message");
    });

    test("when value is not null, then do nothing.", () => {
      notNullOrUndefined("", "test message");
    });
  });
});