import getRandomInt from './randomaizer.js';
import runGame from '../game-engine.js';

const description = 'What is the result of the expression?';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error('указанный оператор не поддерживается');
  }
};

const genGameTask = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, operator, num2));
  return [question, answer];
};

const startGameCalc = () => {
  runGame(description, genGameTask);
};

export default startGameCalc;
