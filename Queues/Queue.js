let Queue = (function() {
  const items = new WeakMap();
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
    peek() {
      let q = items.get(this);
      return q[0];
    }
    isEmpty() {
      return items.get(this).length === 0;
    }
    print() {
      let q = items.get(this);
      return q.toString();
    }
  }
  return Queue;
})();

module.exports = Queue;
