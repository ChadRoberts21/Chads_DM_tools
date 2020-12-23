const raceConfigMetric = {
  Dragonborn: {
    height: { min: 150, max: 220 },
    weight: { min: 80, max: 140 },
    age: { min: 15, max: 80 },
    commonalityValue: 10
  },
  Dwarf: {
    height: { min: 120, max: 155 },
    weight: { min: 55, max: 80 },
    age: { min: 45, max: 250 },
    commonalityValue: 200
  },
  Elf: {
    height: { min: 150, max: 200 },
    weight: { min: 45, max: 75 },
    age: { min: 100, max: 600 },
    commonalityValue: 250
  },
  Gnome: {
    height: { min: 80, max: 130 },
    weight: { min: 10, mix: 30 },
    age: { min: 35, max: 320 },
    commonalityValue: 110
  },
  HalfElf: {
    height: { min: 150, max: 190 },
    weight: { min: 55, max: 120 },
    age: { min: 20, max: 140 },
    commonalityValue: 80
  },
  Halfling: {
    height: { min: 80, max: 120 },
    weight: { min: 10, max: 30 },
    age: { min: 20, max: 170 },
    commonalityValue: 150
  },
  HalfOrc: {
    height: { min: 150, max: 200 },
    weight: { min: 80, max: 140 },
    age: { min: 15, max: 55 },
    commonalityValue: 50
  },
  Human: {
    height: { min: 150, max: 200 },
    weight: { min: 55, max: 115 },
    age: { min: 20, max: 60 },
    commonalityValue: 1000
  },
  Tiefling: {
    height: { min: 150, max: 200 },
    weight: { min: 55, max: 115 },
    age: { min: 20, max: 80 },
    commonalityValue: 5
  }
};

const alignments = {
  type: ["Lawful", "Chaotic", "Neutral"],
  morals: ["Good", "Evil", "Neutral"]
};

export { raceConfigMetric, alignments };
