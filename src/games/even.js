import {getRandomInt} from '../games/randomaizer.js';

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const Number = () => {
    const num = getRandomInt (1,100);
 return num};


export const correctAnswer = (num) => {

    if (num % 2 === 0 ) {
        return 'yes';
    };
    return 'no';
};

