const Stack = require('./Stack');

// console.log(Stack.toString()); // See the stack
function getBinary(decNumber) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
  while (decNumber > 0) {
    //{1}
    rem = Math.floor(decNumber % 2); // Get either a 1 or 0 from the remainder of modulo
    remStack.push(rem); //Add the remainder to the decimal array (weakmap)
    decNumber = Math.floor(decNumber / 2); //divide by 2 and restart
  }
  while (remStack.isEmpty() === false) {
    //{5}
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(getBinary(233));
console.log(getBinary(10));
console.log(getBinary(1000));
