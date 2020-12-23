import Range from "../range";

export default class Race {
  constructor(options) {
    this.name = options.name;
    this.heightRange = new Range(options.height.min, options.height.max);
    this.weightRange = new Range(options.weight.min, options.weight.max);
    this.ageRange = new Range(options.age.min, options.age.max);
    this.commonalityValue = options.commonalityValue;
  }
}
