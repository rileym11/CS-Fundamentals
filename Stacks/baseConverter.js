const Stack = require('./Stack');

function baseConverter(decNumber, base) {
  var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF'; //For hexadecimals
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    // console.log(rem);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}

console.log(baseConverter(100345, 2)); //Binary
console.log(baseConverter(100345, 8)); //Octagonal
console.log(baseConverter(100345, 16)); //Hexadecimal
