import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of expression?';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRound = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, operator).toString();
  return [question, answer];
};

const runCalc = () => gameEngine(description, getRound);

export default runCalc;
