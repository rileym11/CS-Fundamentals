let Queue = (function() {
  //Closure
  const items = new WeakMap(); // Create a weakmap for a private variable
  class Queue {
    constructor() {
      items.set(this, []);
    }
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }
    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }
    front() {
      let q = items.get(this);
      return q[0];
    }
    isEmpty() {
      return items.get(this).length === 0;
    }
    size() {
      return items.get(this).length;
    }
    print() {
      let q = items.get(this);
      return q.toString();
    }
  }
  return Queue;
})();

module.exports = Queue;
