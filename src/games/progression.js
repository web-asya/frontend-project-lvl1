import getRandomInt from './randomaizer.js';
import game from '../game_layout.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const makeProgression = () => {
  const d = getRandomInt(1, 50);
  const FirstNumber = getRandomInt(1, 50);
  const progression = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression[i] = FirstNumber + d * i;
  }
  return progression;
};

const gameTask = () => {
  const progression = makeProgression(10);
  const hiddenNumber = getRandomInt(0, lengthOfProgression - 1);
  const answer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const exercise = progression.join(' ');

  return [exercise, answer];
};

const progressionGame = () => {
  game(description, gameTask);
};

export default progressionGame;
