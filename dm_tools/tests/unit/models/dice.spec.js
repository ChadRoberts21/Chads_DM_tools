import Dice from "@/models/dice";

describe("Dice Class", () => {
  let model;

  beforeEach(() => {
    model = new Dice();
  });

  describe("Given a two sided dice is needed", () => {
    it("returns a random value for a two sided dice", () => {
      const value = model.d2;
      expect(value > 0 && value <= 2).toBe(true);
    });
  });
  describe("Given a three sided dice is needed", () => {
    it("returns a random value for a three sided dice", () => {
      const value = model.d3;
      expect(value > 0 && value <= 3).toBe(true);
    });
  });
  describe("Given a four sided dice is needed", () => {
    it("returns a random value for a four sided dice", () => {
      const value = model.d4;
      expect(value > 0 && value <= 4).toBe(true);
    });
  });
  describe("Given a six sided dice is needed", () => {
    it("returns a random value for a six sided dice", () => {
      const value = model.d6;
      expect(value > 0 && value <= 6).toBe(true);
    });
  });
  describe("Given a eight sided dice is needed", () => {
    it("returns a random value for a eight sided dice", () => {
      const value = model.d8;
      expect(value > 0 && value <= 8).toBe(true);
    });
  });
  describe("Given a ten sided dice is needed", () => {
    it("returns a random value for a ten sided dice", () => {
      const value = model.d10;
      expect(value > 0 && value <= 10).toBe(true);
    });
  });
  describe("Given a twenty sided dice is needed", () => {
    it("returns a random value for a twenty sided dice", () => {
      const value = model.d20;
      expect(value > 0 && value <= 20).toBe(true);
    });
  });
  describe("Given a one hundred sided dice is needed", () => {
    it("returns a random value for a one hundred sided dice", () => {
      const value = model.d100;
      expect(value > 0 && value <= 100).toBe(true);
    });
  });
});
