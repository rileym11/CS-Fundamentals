//Simple djb2 hash implementaation

var djb2HashCode = function(key) {
  var hash = 5381; //initiaize with a prime number
  for (var i = 0; i < key.length; i++) {
    //iterate the key
    hash = hash * 33 + key.charCodeAt(i); //multiply hash by 33 and add the charcode
  }
  return hash % 1013;
  //use the rest of the division of the total by another random prime number
  //(greater than the size we think the HashTable instance can have in our case 1000 is our size).
};

module.exports = djb2HashCode;
