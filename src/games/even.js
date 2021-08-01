import {getRandomInt} from '../games/randomaizer.js';

export const startgame = 'Answer "yes" if the number is even, otherwise answer "no"';

export const Question = () => {
    const num = getRandomInt (1,100);
    console.log (`Question: ${num}`);
    return num;
};

export const GameEven = () => {
    const num = getRandomInt (1,100);
    const elements = [num,num,num];
    for (let i = 0; i < elements.length, i += 1;) {
        let answer = '';
    if ((num[i] % 2 === 0 && answer === 'yes') || (num[i] % 2 !== 0 && answer === 'no'))  {
        console.log('Correct!');
    }
    else if (num[i] % 2 !== 0 && answer === 'yes') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
    }
    else if (num[i] % 2 === 0 && answer === 'no') {
        console.log (`'no' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
    }
  };
  console.log(`Congratulations, ${name}!`);
};
