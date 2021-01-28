const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomChoice = array => {
  const randIndex = randomIntFromInterval(0, array.length - 1);
  return array[randIndex];
};

export { randomIntFromInterval, randomChoice };
