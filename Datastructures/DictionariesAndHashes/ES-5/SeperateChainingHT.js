const LinkedList = require('../../LinkedLists/LinkedList');
//
// Hash Code Algorithims
const loseloseHashCode = require('../HashCodes/loselose'); //weak -- lots of collusions
const djb2HashCode = require('../HashCodes/djb2'); // better -- less collusions

//HashTable.js has the hash table documentation

//This file attempts to solve the hash table collusion problem using seperate chaining

function SCHashTable() {
  var table = [];

  var ValuePair = function(key, value) {
    //Helper class that stores items
    this.key = key;
    this.value = value;
    this.toString = function() {
      //overide the to string method, when the object is console logged this will be auto called
      return '[' + this.key + ' - ' + this.value + ']';
    };
  };

  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    if (table[position] == undefined) {
      //If the index is empty then instantiate a new linked list
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
    //Add a key value obj to the linked list -- see '../../LinkedLists/LinkedList' for docs
  };
  this.get = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      //if position is occupied
      //iterate linked list to find key/value
      var current = table[position].getHead(); //iterate the linked list at the position specified
      while (current.next) {
        if (current.element.key === key) {
          //get each ValuePair elements key, compare it to see whether it is key we are searching for
          return current.element.value; // if so return its value
        }
        current = current.next; //if not keep looping
      }
      //check in case first or last element
      if (current.element.key === key) {
        //if it is it will not go through th while loop as current.next will be null
        return current.element.value;
      }
    }
    //if position is unoccupied
    return undefined;
  };

  this.remove = function(key) {
    var position = loseloseHashCode(key); //=
    if (table[position] !== undefined) {
      //=
      var current = table[position].getHead(); //Same as get method to find element were looking for
      while (current.next) {
        if (current.element.key === key) {
          //if the key matches the argument key
          table[position].remove(current.element); //use the linkedlists remove method to remove that node
          if (table[position].isEmpty()) {
            //if it was the last node in the list, set the index to undef to preserve every other elements position in the table
            table[position] = undefined;
          }
          return true; //indicate that the element was removed
        }
        current = current.next;
      }
      //check in case first or last element
      if (current.element.key === key) {
        //if so then remove it and set the index value to undef to preserve every other elements position in the table
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false; //if there was nothing at the index to begin with then return false
  };
  this.print = function() {
    for (var i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        //Ignore all the indexes with empty values
        console.log(i + ': ' + table[i]);
      }
    }
  };
}
let hash = new SCHashTable();
hash.put('Gandalf', 'gandalf@email.com');
console.log('==========================');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.print();
console.log(hash.remove('Ana'));
console.log(hash.remove('Ana')); // Wont be removed the 2nd time because while the index in the hash exists, the actual name stored in the valuepair class does not
// console.log(hash.remove('Donnie'));

hash.print();

//Output from print will be:
// 5: [Jonathan - jonathan@email.com]n[Jamie - jamie@email.com]n[Sue - sue@email.com]
// 10: [Nathan - nathan@email.com]
// 13: [Donnie - donnie@email.com]n[Ana - ana@email.com]
// 16: [Tyrion - tyrion@email.com]n[Aaron - aaron@email.com]
// 19: [Gandalf - gandalf@email.com]
// 29: [John - johnsnow@email.com]
// 32: [Mindy - mindy@email.com]n[Paul - paul@email.com]
