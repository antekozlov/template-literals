'use strict';

const numberOfPoints = [523, 6000, 5001, 5013];
const getNoun = (number) => {
  number = Math.abs(number);
  number %= 100;
  number %= 10;
  if (number === 1) {
    return 'балл';
  }
  if (number >= 2 && number <= 4) {
    return 'балла';
  }
  return 'баллов';
};

numberOfPoints.forEach(num => {
  console.log(`Ваш баланс: ${num} ${getNoun(num)}`);
});