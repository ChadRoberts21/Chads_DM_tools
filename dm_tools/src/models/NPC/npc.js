export default class NPC {
  constructor(obj) {
    this.firstName;
    this.lastName;
    this.gender;
    this.job;
    this.age;
    this.height;
    this.weight;
    this.race;
    this.alignment;

    if (obj) {
      if (obj.firstName) this.firstName = obj.firstName;
      if (obj.lastName) this.lastName = obj.lastName;
      if (obj.gender) this.gender = obj.gender;
      if (obj.job) this.job = obj.job;
      if (obj.age) this.age = obj.age;
      if (obj.height) this.height = obj.height;
      if (obj.weight) this.weight = obj.weight;
      if (obj.race) this.race = obj.race;
      if (obj.alignment) this.alignment = obj.alignment;
    }
  }
}
