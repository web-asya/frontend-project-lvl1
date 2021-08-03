
import readlineSync from 'readline-sync';

const Game = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}!`);
    console.log(condition);

    for (let i = 0; i < 3, i += 1;) {
            const num = Number();
            console.log (`Question: ${num}`);

        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== correctAnswer) {
          console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
          console.log(`Let's try again, ${name}!`);

        }
        console.log('Correct!');
      }
      console.log(`Congratulations, ${name}!`);
    };

    export default Game;