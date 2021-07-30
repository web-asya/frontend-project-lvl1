export const StartGameEven = 'Answer "yes" if the number is even, otherwise answer "no"';

export const Question = () => {
    const num = getRandomInt (1,100)
    console.log ('Question: ${num}');
    return num;
};

export const CorrectAnswer = () => {
    if (num % 2 === 0)
    return 'yes';
};
    return 'no';
};