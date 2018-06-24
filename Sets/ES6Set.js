// ES6 comes with a Set class built in

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

//ES 6 Union ============
let unionAb = new Set();
for (let x of setA) unionAb.add(x); //Add each sets value to new unionset
for (let x of setB) unionAb.add(x);

//ES 6 Intersection ============
let intersection = function(setA, setB) {
  let intersectionSet = new Set();
  for (let x of setA) {
    if (setB.has(x)) {
      //Loop first set and see if second set has any of its values, if so then add to the intersection set
      intersectionSet.add(x);
    }
  }
  return intersectionSet;
};
let intersectionAB = intersection(setA, setB);

//ES 6 Difference ============
let difference = function(setA, setB) {
  let differenceSet = new Set();
  for (let x of setA) {
    if (!setB.has(x)) {
      //Loop first set and if there is any value that is not in the second set then add it to the difference set
      differenceSet.add(x);
    }
  }
  return differenceSet;
};
let differenceAB = difference(setA, setB);

//Tests

console.log(unionAb);
//
console.log(intersectionAB);
//
console.log(differenceAB);
