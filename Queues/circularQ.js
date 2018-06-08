const Queue = require('./Queue');

function hotPotato(nameList, num) {
  let queue = new Queue(); 
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]); // Queue list of names
  }
  let eliminated = '';
  while (queue.size() > 1) { // Run untill one person is left
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // Add each person to the back of the queue to run in a circle
    }
    eliminated = queue.dequeue(); // Once the Queue is looped the specified number of times, delete the current peson 
    console.log(eliminated + ' was eliminated from the Hot Potato  game.');
  }
  return queue.dequeue(); // Return the name of the last player in the game
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);
