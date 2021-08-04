
import readlineSync from 'readline-sync';
import {correctAnswer} from './games/even.js';
import { Number } from './games/even.js';
import {condition} from './games/even.js';

const Game = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(condition);

    for (let i = 0; i < 3, i += 1;) {
            const num = Number();
            console.log (`Question: ${num}`);

        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== correctAnswer(num)) {
          console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer(num)}".`);
          console.log(`Let's try again, ${name}!`);

        }
        console.log('Correct!');
      }
      console.log(`Congratulations, ${name}!`);
    };

    export default Game;