export default class Range {
  constructor(min, max) {
    this.minimum = min;
    this.maximum = max;
  }

  inRange(value) {
    return value >= this.minimum && value <= this.maximum;
  }
}
