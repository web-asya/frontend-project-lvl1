import getRandomInt from './randomaizer.js';
import runGame from '../game-engine.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const makeProgression = () => {
  const step = getRandomInt(1, 50);
  const firstNumber = getRandomInt(1, 50);
  const progression = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression[i] = firstNumber + step * i;
  }
  return progression;
};

const genGameTask = () => {
  const progression = makeProgression(10);
  const hiddenNumber = getRandomInt(0, lengthOfProgression - 1);
  const answer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startProgressionGame = () => {
  runGame(description, genGameTask);
};

export default startProgressionGame;
