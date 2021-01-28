import { randomChoice } from "@/models/helpers";

describe("Helping methods", () => {
  describe("randomChoice method", () => {
    let array = ["one", "two"];

    it("returns the a value from a given array", () => {
      let value = randomChoice(array);
      expect(array.includes(value)).toBe(true);
    });
    it("returns the a value from a given array, 100 tries", () => {
      for (let index = 0; index < 100; index++) {
        let value = randomChoice(array);
        expect(array.includes(value)).toBe(true);
      }
    });
  });
});
