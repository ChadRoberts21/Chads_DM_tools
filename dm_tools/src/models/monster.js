export default class Monster {
  constructor() {
    this.name = "Default";
    this.size = "any size";
    this.type = "any type";
    this.alignment = "any alignment";

    this.armour = 10;
    this.hitPoints = 10;
    this.speed = {
      default: 30,
      burrow: 0,
      climb: 0,
      fly: 0,
      swim: 0
    };

    this.strength = 10;
    this.dexterity = 10;
    this.constitution = 10;
    this.intelligence = 10;
    this.wisdom = 10;
    this.charisma = 10;
  }
}
