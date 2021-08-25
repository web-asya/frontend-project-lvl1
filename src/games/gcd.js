import getRandomInt from './randomaizer.js';
import game from '../game_layout.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
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

const gameTask = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const expression = `${num1} ${num2}`;
  const answer = gcd(num1, num2);
  return [expression, String(answer)];
};

const startGameGCD = () => {
  game(description, gameTask);
};

export default startGameGCD;
