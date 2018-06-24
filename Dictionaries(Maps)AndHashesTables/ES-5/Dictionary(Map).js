//ES 6 has a Map() class included (Maps are another term for Dictionaries)
// these are sets that have seperate key/values as opposed to just keys in a set
//Set: {o:'o'} //Dictionary/map: {Gandalf: 'gandalf@email.com'}
// ES 5 ============================
//
function Dictionary() {
  var items = {};

  this.has = function(key) {
    return key in items; // check the dictionary for the identifier key used
  };
  this.set = function(key, value) {
    items[key] = value; //Set the key and values based on the arguments
  };
  this.delete = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };
  this.values = function() {
    var values = [];
    for (var k in items) {
      //loop the items obj
      if (this.has(k)) {
        values.push(items[k]); //push all the values of the keys into the array
      }
    }
    return values; //return array of values
  };
  this.keys = function() {
    return Object.keys(items);
  };
  this.getItems = function() {
    return items;
  };
  this.clear = function() {
    items = {}; // reset items obj
  };
  this.size = function() {
    return Object.keys(items).length;
  };
}

// var dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');
// console.log(dictionary.has('Gandalf'));
// console.log(dictionary.getItems());

module.exports = Dictionary;
