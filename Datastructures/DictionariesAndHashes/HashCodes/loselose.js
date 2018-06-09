//Simple loselose hash implementaation

var loseloseHashCode = function(key) {
    var hash = 0; /// Var that will store the combined ASCII value
    for (var i = 0; i < key.length; i++) {
      //iterate through the key and add each characters ASCII value to the hash
      hash += key.charCodeAt(i);
    }
    return hash % 37; ///To work with lower numbers, use the rest of the division of the hash number using an arbitrary number
  };
module.exports = loseloseHashCode;
