//Weak versions of Maps and Sets do not have the entries, keys, and values methods
//It is also only possible to use objects as a key as opposed to any primitive data type

var map = new WeakMap();
var ob1 = { name: 'Gandalf' }, //Set the keys as objects
  ob2 = { name: 'John' },
  ob3 = { name: 'Tyrion' };
map.set(ob1, 'gandalf@email.com'); //now the obj is the key
map.set(ob2, 'johnsnow@email.com');
map.set(ob3, 'tyrion@email.com');
console.log(map.has(ob1)); // outputs true
console.log(map.get(ob3)); // outputs tyrion@email.com
map.delete(ob2); //to use any of the methods, the original obj used to set the map index needs to be used
