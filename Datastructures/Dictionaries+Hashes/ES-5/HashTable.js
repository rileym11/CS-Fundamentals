//Hash tables are unique objs (key value pairs) where the keys are stored as their ASCII values
// for super quick accessing

function HashTable() {
  var table = {};

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
    table[loseloseHashCode(key)] = undefined;
  };
  this.getItems = function() {
    return table;
  };
}
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.getItems());
console.log(hash.get('Gandalf'));
