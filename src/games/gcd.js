import getRandomInt from './randomaizer.js';
import runGame from '../game-engine.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  let num1 = firstNumber;
  let num2 = secondNumber;

  if (num2 > num1) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  while (true) {
    if (num2 === 0) return num1;
    num1 %= num2;
    if (num1 === 0) return num2;
    num2 %= num1;
  }
};

const genGameTask = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

const startGameGCD = () => {
  runGame(description, genGameTask);
};

export default startGameGCD;
