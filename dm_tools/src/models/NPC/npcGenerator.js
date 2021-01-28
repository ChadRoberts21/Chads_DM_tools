import { randomIntFromInterval, randomChoice } from "../helpers";
import NPC from "./npc";

export default class NpcGenerator {
  constructor(firstNames, lastNames, jobs, gender, raceGenerator) {
    this.firstNames = firstNames;
    this.lastNames = lastNames;
    this.jobs = jobs;
    this.gender = gender;
    this.raceGenerator = raceGenerator;
  }

  randomGender() {
    return randomChoice(["male", "female"]);
  }

  randomJob() {
    return randomChoice(this.jobs);
  }

  randomFirstName(gender) {
    return randomChoice(this.firstNames[gender]);
  }

  randomLastName() {
    const dataKey = randomIntFromInterval(1, 100) > 90 ? "rare" : "common";
    return randomChoice(this.lastNames[dataKey]);
  }

  new() {
    let genderKey;
    if (
      this.gender.toLowerCase() !== "male" ||
      this.gender.toLowerCase() !== "female"
    ) {
      genderKey = this.randomGender();
    } else {
      genderKey = this.gender.toLowerCase();
    }

    const raceDetails = this.raceGenerator.new();

    return new NPC({
      firstName: this.randomFirstName(genderKey),
      lastName: this.randomLastName(),
      gender: genderKey,
      job: this.randomJob(),
      age: raceDetails.age,
      height: raceDetails.height,
      weight: raceDetails.weight,
      race: raceDetails.race,
      alignment: raceDetails.alignment
    });
  }
}
