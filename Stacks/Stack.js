function Stack() {
  let items = [];

  this.push = function(element) {
    items.push(element);
  };
  this.pop = function() {
    return items.pop();
  };
  this.isEmpty = function() {
    return items.length === 0;
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.clear = function() {
    return items.set(this, []);
  };
  this.print = function() {
    return console.log(items);
  };
}

let stack = new Stack();
let arr = ['a', 'b', 'c', 'd', 'f'];
for (let i = 0; i < arr.length; i++) stack.push(arr[i]);
stack.print();
stack.pop();
stack.pop();
stack.print();
stack.push('p');
stack.print();
stack.pop();
stack.print();

module.exports = Stack;
