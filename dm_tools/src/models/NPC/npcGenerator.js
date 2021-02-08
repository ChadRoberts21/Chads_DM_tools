import { randomIntFromInterval, randomChoice } from "../helpers";
import NPC from "./npc";

export default class NpcGenerator {
  constructor(names, jobs, gender, raceGenerator) {
    this.names = names;
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

  randomFirstName(gender, raceKey = null) {
    if (raceKey) {
      return randomChoice(this.names[raceKey].FirstNames[gender]);
    }
    return randomChoice(this.names.FirstNames[gender]);
  }

  randomLastName(raceKey = null) {
    let lastNames;
    if (raceKey) {
      lastNames = this.names[raceKey].LastNames;
    } else {
      lastNames = this.names.LastNames;
    }

    let lastName = " ";
    if (lastNames) {
      if (lastNames.rare) {
        const dataKey = randomIntFromInterval(1, 100) > 90 ? "rare" : "common";
        lastName = randomChoice(lastNames[dataKey]);
      } else {
        lastName = randomChoice(lastNames.common);
      }
    }
    return lastName;
  }

  new() {
    let genderKey;
    if (
      this.gender &&
      this.gender.toLowerCase() !== "male" &&
      this.gender.toLowerCase() !== "female"
    ) {
      genderKey = this.randomGender();
    } else {
      genderKey = this.gender.toLowerCase();
    }

    const raceDetails = this.raceGenerator.new();
    let raceKey = null;
    if (this.names.isSplit) {
      raceKey = this.names.isSplit.by === "race" ? raceDetails.race : null;
    }

    return new NPC({
      firstName: this.randomFirstName(genderKey, raceKey),
      lastName: this.randomLastName(raceKey),
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
