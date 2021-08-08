import {getRandomInt} from '../games/randomaizer.js';

const description = 'Find the greatest common divisor of given numbers.';

const Gcd = (num1,num2) => {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    if (num2 > num1) {let temp = num1; num1 = num2; num2 = temp;}
    while (true) {
        if (num2 == 0) return num1;
        num1 = num1 % num2;
        if (num1 == 0) return num2;
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


const GCD = () => {
    Game(description, GameTask);
};

  export default GCD ;
