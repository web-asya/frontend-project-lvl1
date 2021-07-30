import {getRandomInt} from '../games/randomaizer.js';
export const StartGameEven = 'Answer "yes" if the number is even, otherwise answer "no"';

export const Question = () => {
    const num = getRandomInt (1,100)
    console.log ('Question: ${num}');
    return num;
};

export const UserAnswer = (answer) => {
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no'))  {
    return 'Correct!';
}
    else if (num % 2 !== 0 && answer === 'yes') {
    return "'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!";
}
    else if (num % 2 === 0 && answer === 'no') {
    return "'no' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!!";
}
};