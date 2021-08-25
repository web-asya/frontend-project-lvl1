import getRandomInt from './randomaizer.js';
import runGame from '../game-engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const genGameTask = () => {
  const num = getRandomInt(1, 100);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => {
  runGame(description, genGameTask);
};

export default startEvenGame;
