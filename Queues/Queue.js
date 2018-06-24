function Queue() {
  let items = [];
  this.enqueue = function(element) {
    items.push(element);
  };
  this.dequeue = function() {
    return items.shift();
  };
  this.front = function() {
    return items[0];
  };
  this.isEmpty = function() {
    return items.length === 0;
  };
  this.size = function() {
    return items.length;
  };
  this.print = function() {
    return console.log(items.toString());
  };
}

let q = new Queue();
let arr = ['a', 'b', 'c', 'd', 'f'];
for (let i = 0; i < arr.length; i++) q.enqueue(arr[i]);
q.print();
q.dequeue();
q.dequeue();
q.print();
q.enqueue('p');
q.print();
q.dequeue();
q.print();

module.exports = Queue;
