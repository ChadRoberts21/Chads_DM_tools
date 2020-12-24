import Range from "@/models/range";

describe("Range Class", () => {
  let model;

  const constructorValues = {
    min: 2,
    max: 5
  };
  beforeEach(() => {
    model = new Range(constructorValues.min, constructorValues.max);
  });

  describe("Given a request for the minium value", () => {
    it("returns the correct value", () => {
      expect(model.minimum == constructorValues.min).toBe(true);
    });
  });

  describe("Given a request for the maximum value", () => {
    it("returns the correct value", () => {
      expect(model.maximum == constructorValues.max).toBe(true);
    });
  });

  describe("Given a value to 'inRange'", () => {
    it("returns true if value is in range", () => {
      const testValue = constructorValues.max - 1;
      expect(model.inRange(testValue)).toBe(true);
    });
    it("returns false if value is not in range", () => {
      const testValue = constructorValues.max + 1;
      expect(model.inRange(testValue)).toBe(false);
    });
  });
});
