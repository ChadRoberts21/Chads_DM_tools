import MonsterStats from "../monsterStats";

export default class NPC {
  constructor() {
    this.firstName;
    this.lastName;
    this.gender;
    this.age;
    this.height;
    this.weight;
    this.race;
    this.alignment;

    this.stats = new MonsterStats();
  }
}
