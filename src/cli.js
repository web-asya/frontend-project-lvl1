import readlineSync from 'readline-sync';

const Greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default Greetings;
