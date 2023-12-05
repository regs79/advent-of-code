// Part One

var fs = require('fs')

var puzzleInput =  fs.readFileSync('input.txt', 'utf8')
  .split('\n');

  
const getOnlyNumbers = (input) => {
  var onlyNumbers = [];
  input.forEach(item => {
    var numbers = '';
    Array.from(item).forEach(character => {
      var number = parseInt(character);
      if (!isNaN(number)) {
        numbers += number.toString();
      }
    });
    onlyNumbers.push(numbers);
  });
  return onlyNumbers;
}

const getFirstLast = (input) => {
  const data = getOnlyNumbers(input);

  const array = [];// const number = 0;

  data.forEach(item => {
    var combo = '';
    first = item.charAt(0)
    last = item.charAt(item.length -1);
    combo = first + last;
    var comboNum = Number(combo)
    array.push(comboNum);
  });

  return array;
}

const calcTotal = (input) => {
  const total = input.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total;
}

const PartOneResult = calcTotal(getFirstLast(puzzleInput));

console.log(PartOneResult);

// Part Two 

var sampleInput =  fs.readFileSync('sample2.txt', 'utf8')
  .split('\n');

const replacedInput = [];

const convertWord = (string) => {
  const numbers = [
    { word: 'one', replacement: 'one1one' },
    { word: 'two', replacement: 'two2two' },
    { word: 'three', replacement: 'three3three' },
    { word: 'four', replacement: 'four4four' },
    { word: 'five', replacement: 'five5five' },
    { word: 'six', replacement: 'six6six' },
    { word: 'seven', replacement: 'seven7seven' },
    { word: 'eight', replacement: 'eight8eight' },
    { word: 'nine', replacement: 'nine9nine' },
  ];
  numbers.forEach(element => {
    string = string.split(element.word).join(element.replacement);
  });
  return string;
}

const swapWords = (input) => {
  const replacedInput = [];
  input.forEach(element => {
    const converted = convertWord(element);
    replacedInput.push(converted);
  })
  return replacedInput;
}

const PartTwoResult = calcTotal(getFirstLast(swapWords(puzzleInput)));

console.log(PartTwoResult);