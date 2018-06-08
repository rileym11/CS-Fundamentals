let Stack = (function() {
  //Wrapped in a closure
  const items = new WeakMap(); // Create a weakmap for a private variable
  class Stack {
    constructor() {
      items.set(this, []); //Set the weakmaps key to 'this' and value to []
    }
    push(element) {
      let s = items.get(this); //{3}
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
  return Stack; //{5} //Return the
})();

module.exports = Stack;
