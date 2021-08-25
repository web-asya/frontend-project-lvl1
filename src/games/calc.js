import getRandomInt from './randomaizer.js';
import game from '../game_layout.js';

const description = 'What is the result of the expression?';

// eslint-disable-next-line consistent-return
const calculator = (num1, operator, num2) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
  }
};

const gameTask = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const expression = `${num1} ${operator} ${num2}`;
  const answer = calculator(num1, operator, num2);
  return [expression, String(answer)];
};

const startCalc = () => {
  game(description, gameTask);
};

export default startCalc;
