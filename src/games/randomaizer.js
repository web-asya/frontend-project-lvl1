export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const selectedOperator = (operators) => {
  operators[getRandomInt(0, operators.length - 1)];
};
