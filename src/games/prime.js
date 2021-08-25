import getRandomInt from '../utils.js';
import runGame from '../game-engine.js';

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

const genGameTask = () => {
  const num = getRandomInt(1, 17);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => {
  runGame(description, genGameTask);
};

export default startPrimeGame;
