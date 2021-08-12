import {getRandomInt} from '../games/randomaizer.js';
import Game from '../game_layout.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const MakeProgression = () => {
    const d = getRandomInt(1, 50);
    const FirstNumber = getRandomInt(1, 50);
    let progression = [];

    for (let i = 0; i < lengthOfProgression; i += 1) {
      progression[i] = FirstNumber + d * i;
    }
    return progression;
  };

  const GameTask = () => {
    const progression = MakeProgression(10);
    const hiddenNumber = getRandomInt(0, lengthOfProgression - 1);
    const answer = String(progression[hiddenNumber]);

    const exercise = progression.splice([hiddenNumber], 0 , '..');


    return [exercise, answer];
  };

  const ProgressionGame = () => {
    Game(description, GameTask);
  };

  export default ProgressionGame;