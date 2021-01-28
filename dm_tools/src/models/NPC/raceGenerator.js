import { randomIntFromInterval, randomChoice } from "../helpers";

export default class RaceGenerator {
  constructor(raceData, alignmentData) {
    this.totalCommonalityValue = 0;

    for (const race in raceData) {
      if (Object.hasOwnProperty.call(raceData, race)) {
        const element = raceData[race];
        this.totalCommonalityValue += element.commonalityValue;
      }
    }

    this.raceData = raceData;
    this.alignmentData = alignmentData;
  }

  new() {
    const randNumber = randomIntFromInterval(1, this.totalCommonalityValue);
    let minIncrementor = 0;
    let selectedRace = null;

    for (const raceName in this.raceData) {
      if (Object.hasOwnProperty.call(this.raceData, raceName)) {
        const raceDetails = this.raceData[raceName];
        const maxIncrementor = minIncrementor + raceDetails.commonalityValue;
        if (randNumber > minIncrementor && randNumber <= maxIncrementor) {
          selectedRace = raceName;
          break;
        } else {
          minIncrementor = maxIncrementor;
        }
      }
    }

    const alignment = `${randomChoice(this.alignmentData.type)} ${randomChoice(
      this.alignmentData.morals
    )}`;

    return {
      race: selectedRace,
      height: randomIntFromInterval(
        this.raceData[selectedRace].height.min,
        this.raceData[selectedRace].height.max
      ),
      weight: randomIntFromInterval(
        this.raceData[selectedRace].weight.min,
        this.raceData[selectedRace].weight.max
      ),
      age: randomIntFromInterval(
        this.raceData[selectedRace].age.min,
        this.raceData[selectedRace].age.max
      ),
      alignment: alignment
    };
  }
}
