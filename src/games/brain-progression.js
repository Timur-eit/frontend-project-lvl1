import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?.';

const progressionLength = 10;

const getQuestion = (startNumber, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    let item = startNumber + step * i;
    if (i === hiddenIndex) {
      item = '..';
    }
    progression.push(item);
  }
  return progression.join(' ');
};


const getRound = () => {
  const startNumber = getRandomNumber(1, 15);
  const step = getRandomNumber(1, 5);
  const hiddenIndex = getRandomNumber(0, progressionLength);

  const question = getQuestion(
    startNumber,
    step,
    hiddenIndex,
  );

  const answer = (startNumber + hiddenIndex * step).toString();

  return [question, answer];
};


const runProgresion = () => gameEngine(description, getRound);

export default runProgresion;
