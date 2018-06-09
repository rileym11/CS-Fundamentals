//Hash tables are unique objs (key value pairs) where the keys are stored as a hash, in this case
// their ASCII values for super quick accessing

function HashTable() {
  var table = []; //Array will be filled with undef values of all the indexes leading up to the entered keys hash

  var loseloseHashCode = function(key) {
    var hash = 0; /// Var that will store the combined ASCII value
    for (var i = 0; i < key.length; i++) {
      //iterate through the key and add each characters ASCII value to the hash
      hash += key.charCodeAt(i);
    }
    return hash % 37; ///To work with lower numbers, use the rest of the division of the hash number using an arbitrary number
  };

  this.put = function(key, value) {
    var position = loseloseHashCode(key); // get the hash code of the key
    console.log(position + ' - ' + key); //tell what hash value the key is being stored as
    table[position] = value; //insert the unique key/value into the table
  };
  this.get = function(key) {
    return table[loseloseHashCode(key)];
  };
  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined; //set to undefined instead of deleting as to not shift the arrays positions
  };
  this.print = function() {
    for (var i = 0; i < table.length; ++i) {
      //loop the table
      if (table[i] !== undefined) {
        //If the index is not empty then console.log it
        console.log(i + ': ' + table[i]);
      }
    }
  };
}
//Tests
var hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('Gandalf', 'gandalfs@email.com');

// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');
// hash.put('Pablo', 'pablo@email.com');
// hash.remove('Gandalf');
// console.log(hash.get('Pablo'));
// hash.print();
// console.log(hash.get('Gandalf'));

// Collusion testing

hash.put('Gandalf', 'gandalf@email.com');
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
