const Races = {
  Dragonborn: {
    height: { min: 150, max: 220, denominator: "cm" },
    weight: { min: 80, max: 140, denominator: "kg" },
    age: { min: 15, max: 80, denominator: "years" },
    commonalityValue: 10
  },
  Dwarf: {
    height: { min: 120, max: 155, denominator: "cm" },
    weight: { min: 55, max: 80, denominator: "kg" },
    age: { min: 45, max: 250, denominator: "years" },
    commonalityValue: 200
  },
  Elf: {
    height: { min: 150, max: 200, denominator: "cm" },
    weight: { min: 45, max: 75, denominator: "kg" },
    age: { min: 100, max: 600, denominator: "years" },
    commonalityValue: 250
  },
  Gnome: {
    height: { min: 80, max: 130, denominator: "cm" },
    weight: { min: 10, max: 30, denominator: "kg" },
    age: { min: 35, max: 320, denominator: "years" },
    commonalityValue: 110
  },
  HalfElf: {
    height: { min: 150, max: 190, denominator: "cm" },
    weight: { min: 55, max: 120, denominator: "kg" },
    age: { min: 20, max: 140, denominator: "years" },
    commonalityValue: 80
  },
  Halfling: {
    height: { min: 80, max: 120, denominator: "cm" },
    weight: { min: 10, max: 30, denominator: "kg" },
    age: { min: 20, max: 170, denominator: "years" },
    commonalityValue: 150
  },
  HalfOrc: {
    height: { min: 150, max: 200, denominator: "cm" },
    weight: { min: 80, max: 140, denominator: "kg" },
    age: { min: 15, max: 55, denominator: "years" },
    commonalityValue: 50
  },
  Human: {
    height: { min: 150, max: 200, denominator: "cm" },
    weight: { min: 55, max: 115, denominator: "kg" },
    age: { min: 20, max: 60, denominator: "years" },
    commonalityValue: 1000
  },
  Tiefling: {
    height: { min: 150, max: 200, denominator: "cm" },
    weight: { min: 55, max: 115, denominator: "kg" },
    age: { min: 20, max: 80, denominator: "years" },
    commonalityValue: 5
  }
};

const Alignments = {
  type: ["Lawful", "Chaotic", "Neutral"],
  morals: ["Good", "Evil", "Neutral"]
};

export { Alignments, Races };
