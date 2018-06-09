// Hash Code Algorithims
const loseloseHashCode = require('../HashCodes/loselose'); //weak -- lots of collusions
const djb2HashCode = require('../HashCodes/djb2'); // better -- less collusions

//HashTable.js has the hash table documentation

//This file attempts to solve the hash table collusion problem using linear probing
function LPHashTable() {
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
    var position = loseloseHashCode(key); // get ASCII
    console.log(position);
    if (table[position] == undefined) {
      // if nothing is at the position then just add a valuepair of it
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position; //add one to the position first by putting incrementer before assigning to index
      while (table[index] != undefined) {
        // loop up the table until the first empty index is found
        index++;
      }
      table[index] = new ValuePair(key, value); // add the valuepair once an empty index is found
    }
  };
  this.get = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      //make sure index is not empty
      if (table[position].key === key) {
        //check to see if the valuepair's key at the index matches the argument and return it if so
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          //otherwise loop up the table until the index that contains the valuepair with matching keys is found
          index++;
        }
        if (table[index].key === key) {
          //verify just to make sure that the arg key matches the founnd valuepair key then return its value
          return table[index].value;
        }
      }
    }
    return undefined; //if index is empty to start with
  };

  this.remove = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      //make sure index is not empty
      if (table[position].key === key) {
        //check to see if the valuepair's key at the index matches the argument and return it if so
        table[index] = undefined;
        return true;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          //otherwise loop up the table until the index that contains the valuepair with matching keys is found
          index++;
        }
        if (table[index].key === key) {
          //verify just to make sure that the arg key matches the founnd valuepair key then return its value
          table[index] = undefined;
          return true;
        }
      }
    }
    return false; //if index is empty to start with
  };

  this.print = function() {
    for (var i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(i + ': ' + table[i]);
      }
    }
  };
}

//Tests
var hash = new LPHashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com'); //Shares same hash as Ana
hash.put('Ana', 'ana@email.com'); //Shares same hash as Donnie
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

hash.print();
// console.log(hash.get('Ana'));
// hash.remove('Ana');
// console.log('================================');
// hash.print();
