var fs = require('fs');

var input =  fs.readFileSync('input.txt', 'utf8')
  .split('\n')

let calc = 0;

input.forEach(function(data) {
  let lineNum = '';
  for (var i = 0; i < data.length; i++) {
    var currentChar = data[i];
    var myNumber = parseInt(currentChar, 10);
  
    if (!isNaN(myNumber)) {
      lineNum = lineNum + currentChar;
      break;
    }
  }

  for (var i = data.length - 1; i >= 0; i--) {
    var currentChar = data[i];
    var myNumber = parseInt(currentChar, 10);
  
    if (!isNaN(myNumber)) {
      lineNum = lineNum + currentChar;
      // console.log(lineNum);
      break;
    }
  }

  var finalNum = parseInt(lineNum, 10);
  calc = calc + finalNum;
});

console.log(calc);