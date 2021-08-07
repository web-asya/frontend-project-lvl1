
import readlineSync from 'readline-sync';


const AmountRounds = 3;

const Game = (description, GameTask) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(description);

    for (let i = 0; i < AmountRounds; i += 1) {
      let task = GameTask ();
      const [num, answer] = task;
            console.log (`Question: ${num}`);

        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== answer) {
          console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
          console.log(`Let's try again, ${name}!`);
          return;

        };
        console.log('Correct!');
     };

      console.log(`Congratulations, ${name}!`);
    };

    export default Game;