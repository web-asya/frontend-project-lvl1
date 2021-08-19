import readlineSync from 'readline-sync';

const game = (description, GameTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const AmountRounds = 3;

  for (let i = 0; i < AmountRounds; i += 1) {
    const task = GameTask();
    const [num, answer] = task;
    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
