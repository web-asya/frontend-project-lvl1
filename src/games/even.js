import getRandomInt from './randomaizer.js';
import Game from '../game_layout.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const GameTask = () => {
  const num = getRandomInt(1, 100);
  const answer = isEven(num) ? 'yes' : 'no';
  return [num, answer];
};

const isEvenGame = () => {
  Game(description, GameTask);
};

export default isEvenGame;
