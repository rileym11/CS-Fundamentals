let ES6Stack = (function() {
  //Wrapped in a closure
  const items = new WeakMap(); // Create a weakmap for a private variable
  class ES6Stack {
    constructor() {
      items.set(this, []); //Set the weakmaps key to 'this' and value to []
    }
    push(element) {
      let s = items.get(this);
      s.push(element);
    }
    _pop() {
      let s = items.get(this);
      let r = s.pop();
      return r;
    }
    isEmpty() {
      return items.get(this).length === 0;
    }
    peek() {
      let s = items.get(this);
      let r = s[s.length - 1];
      return r;
    }
    clear() {
      let s = items.set(this, []);
      return s;
    }
  }
  return ES6Stack; //Return the Stack class
})();

module.exports = ES6Stack;
