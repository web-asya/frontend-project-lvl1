import getRandomInt from './randomaizer.js';
import game from '../game_layout.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let counter = 2; counter < num; counter += 1) {
    if (num % counter === 0) {
      return false;
    }
  }
  return true;
};

const gameTask = () => {
  const num = getRandomInt(1, 17);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};

const isPrimeGame = () => {
  game(description, gameTask);
};

export default isPrimeGame;
