import {getRandomInt} from '../games/randomaizer.js';
import Game from '../game_layout.js';

const description = 'What is the result of the expression?';

const calculator = (num1,operator,num2) => {
    switch (operator) {
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
        }
    };

const GameTask = () => {
    const num1 = getRandomInt (1,100);
    const num2 = getRandomInt (1,100);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const expression = `${num1} ${operator} ${num2}`;
    let answer = calculator (num1,operator,num2);
    return [expression, String(answer)];
};


const Calc = () => {
    Game(description, GameTask);
};

  export default Calc;
