import {getRandomInt} from '../games/randomaizer.js';
import Game from '../game_layout.js';

const description = 'Find the greatest common divisor of given numbers.';

// TODO: почему этот вариант не работает??
// const Gcd = (num1,num2) => {

//     if (num2 == 0) {
//         return num1;
//     };
//     if (num1 == 0) {
//         return num2;
//     };
//     if (num2 > num1) {
//         let temp = num1;
//         num1 = num2;
//         num2 = temp;
//          }
//     while (num1 !== 0 && num2 !== 0) {
//     if (num1 > num2)
//          return num1 = num1 % num2;
//         num2 = num2 % num1;
//     };
// };

const Gcd = (num1,num2) => {
    if (num2 > num1) {
        let temp = num1; num1 = num2; num2 = temp;
    }
    while (true) {
        if (num2 === 0) return num1;
        num1 = num1 % num2;
        if (num1 === 0) return num2;
        num2 = num2 % num1;
    }
};

const GameTask = () => {
    const num1 = getRandomInt (1,100);
    const num2 = getRandomInt (1,100);
    const expression = `${num1} ${num2}`;
    let answer = Gcd (num1,num2);
    return [expression, String(answer)];
};


const GameGCD = () => {
    Game(description, GameTask);
};

  export default GameGCD ;
