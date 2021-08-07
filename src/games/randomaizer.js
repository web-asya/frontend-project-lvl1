export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

export const selectedOperator = (operators) => {
    return Math.floor(Math.random() * operators.length);
}
