
// ES 5 =======================

//Sets are objs or arrays of unique values
function Set() {
  let items = {};

  this.has = function(value) {
    return value in items;
  };
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value; //if unique then add -- value will be key and value in obj {o:o, k:k, ...}
      return true;
    }
    return false;
  };
  this.delete = function(value) {
    if (this.has(value)) {
      delete items[value]; //if the value exists delete it from the obj
      return true;
    }
    return false;
  };
  this.clear = function() {
    items = {}; // reset items obj
  };
  this.size = function() {
    return Object.keys(items).length; 
  };
  this.values = function() {
    return Object.keys(items);
  };
  this.print = function() {
    return items;
  };

  //Set Operators =========================

  this.union = function(otherSet) {
    let unionSet = new Set();
    let values = this.values(); //add values of this set
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values(); //add values of argument set
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
  this.intersection = function(otherSet) {
    let intersectionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      //loop through this sets values
      if (otherSet.has(values[i])) {
        //if the value intersects with the argument set then add it to the enw intersection set
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };
  this.difference = function(otherSet) {
    let differenceSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      //loop through this sets values
      if (!otherSet.has(values[i])) {
        //if the value does not exist in the arg set addit to the diffset
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };
  this.subset = function(otherSet) {
    if (this.size() > otherSet.size()) {
      //first check if this sets size is bigger than the arg set because if it is, then it can't be a subset
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        //Loop through this sets values
        if (!otherSet.has(values[i])) {
          return false; //check if any of the values are not in both sets and return false if so
        }
      }
      return true; //return true if all conditions are met
    }
  };
}

//Union test
let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
let unionAB = setA.union(setB);
console.log(unionAB.values());

//Intersection test
setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

//Difference test
setA = new Set();
setA.add(1); // only element that only exists in setA
setA.add(2);
setA.add(3);
setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
let differenceAB = setA.difference(setB);
console.log(differenceAB.values());

//Subset test
setA = new Set();
setA.add(1);
setA.add(2);
setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
let setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.subset(setB));
console.log(setA.subset(setC));
