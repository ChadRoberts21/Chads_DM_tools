export default class Dice {
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  parseString() {
    // parses a dice string
  }

  get d2() {
    return this.getRandomInt(1, 2);
  }
  get d3() {
    return this.getRandomInt(1, 3);
  }
  get d4() {
    return this.getRandomInt(1, 4);
  }
  get d6() {
    return this.getRandomInt(1, 6);
  }
  get d8() {
    return this.getRandomInt(1, 8);
  }
  get d10() {
    return this.getRandomInt(1, 10);
  }
  get d12() {
    return this.getRandomInt(1, 12);
  }
  get d20() {
    return this.getRandomInt(1, 20);
  }
  get d100() {
    return this.getRandomInt(1, 100);
  }
}
